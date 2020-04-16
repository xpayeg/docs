
# 1. prepare amount

  

Note: depending on the agreement with XPay, if the service fees are **included in bill**, skip this step.

  

# Description

  

this endpoint takes an amount in **piasters**  `<amount_piasters>` and a community id `<community_id>`,

  

and calculates the service fees added to the amount.

  

-  ## URL

  

		https://develop.xpay.app/api/payments/prepare-amount/

  

-  ## Method

  

		POST

  
  

-  ## Body Params

		{ "amount_piasters": 100, "community_id": 1}

  

Notes:

  

-  `<community_id>`, is an ID that references prefrences to your community, it must always be present and of value that your community recieved from XPay.

  

-  `<amount_piasters>`, is the amount that represents the service cost without service fees and must be entered in **piasters**(integer).

  
  

-  ## Response body

  

If the POST request was successful, it will return `<totaL_amount_piasters>` which is the service cost with service fees included, save the value returned in `<total_amount_piasters>` as you will use it later.

  
	{
		"status": {
			"code": 200,
			"message": "success",
			"errors": []
		},

		"data": {
			"total_amount_piasters": 101
		},
		"count": null,
		"next": null,
		"previous": null
	}
		  
  

# 2. API Payment
  

1. Navigate to XPay community admin dashboard and login with the url and credentials that your community recieved later.

  

2. Navigate to **API Payment** under **payments** section in the side menu.

  

![API Payment section](./assets/api_payment.png)

  
  

3. Click on **add variable amount** button in the top right corner.

  

4. Fill in the name and description that describe your payment type.

  

5. check **Is active** option.

  

6. if you want your payments to require a `<member_id>` field, check  ** Require member id**, this id will not be validated, it will just be an internal info in your business, if you don't need it.. uncheck it.

7. if you want the payment iframe to redirect to a specific page after payment is done,  fill in the url to redirect to in ** Redirect url** field. In the redirected url you will have the status of the transaction, the transaction id, and the member id if provided.

9. If you want the payment server to send a POST request to another server with transaction status, and details, after payment is done,  fill in ** Callback url** field. The POST request body will have the status of the transaction, the transaction id, and the member id if provided.

10. click **Save**.

![Add an API Payment form](./assets/api_payment_form.png)

  

9. you will be redirected back to **API Payment**, the new created template will appear.

  

10. save the value in the **ID** column for later.

  

![new API Payment created](./assets/api_payment_list.png)

  
  
  

# 3. API key

1. Navigate to **API keys** under **payments** communities in the side menu.

  

![API keys section](./assets/api_keys.png)

  

2. Click on **add API key** button in the top right corner.

  

3. Fill in the name.

![Add API key](./assets/add_api_key.png)

  
  

4. click **Save**, you will be redirected back to **API keys**.

  

5. copy the api key value from the message that appears in the top and save it safely as it can't be retrieved later.

  

![API key](./assets/new_api_key.png)

  
  
  

# 4. pay endpoint

  

# Description

  

​

  

This endpoint will take required payment info and pass them to our Core Payment API and return the resultant response.

  

<!-- After the payment cycle ends, the user will be redirected to the url filled while creating the API Payment and will return member id and transaction id as query paramaters. -->

  
  

​

  

-  ## URL

  

		https://develop.xpay.app/api/payments/pay/variable-amount

  

​

  

-  ## Method

  

		POST

  

​

  

-  ## Header Params

  

		x-api-key : <api-key>

​
Note: replace `<api-key>` with the api key you generated in [the third step](#3-api-key)


  

-  ## Body Params
		{
			"billing_data": {
				"name": "Islam Rostom",
				"email": "islam.rostom93@gmail.com",
				"phone_number": "+201119045759"
			},
			"amount_piasters": 5000,
			"variable_amount_id": 4,
			"community_id": 1,
			"pay_using": "card"
		}


	
  
  
  

Notes:

  
  

-  `<amount_piasters>`, is the amount that will be debited from your community's member in **piasters**, if your community fees is included in bill then use the value returned from [prepare amount step](#1-prepare-amount) , otherwise use the amount you want to charge the member directly in **piasters**.

  

- The `<name>` field's value must contain first and last name in **english letters** with space between them.

  

-  `<phone_number>` field's value **must contain country code** prefixed

  

-  `<variable_amount_id>`, is an ID that references to the API Payment you created in [API Payment step](#2-variable-amount-template).

  

-  `<community_id>`, is an ID that references prefrences to your community, it must always be present and of value that your community recieved.

  
  
  
  
  

-  ## Response body

  

If the POST request was successful, it will return an iframe url along with the transactionn id like in this example that the user can proceed with the payment process at.



	{
		"status": {
			"code": 200,
			"message": "success",
			"errors": []
		},
		"data": {
			"iframe_url": "https://dev-payment.xpay.app/core/payment_iframe/2733/",
			transaction_id: 3220,
			transaction_status: "SUCCESSFUL",
			transaction_uuid: "94fdb93f-c7f0-4b4d-8c8f-1c463c931344"
		},
		"count": null,
		"next": null,
		"previous": null
	}

# 5. Invoices

XPay dashboard also provides you with invoices of each payment made to your community, navigate to API Payment Invoices, in invoices section, you will see there the status of every payment, it's transaction id, and other payment and customer details.

  
