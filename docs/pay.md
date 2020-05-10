---
id: pay
title: Pay endpoint
---

This endpoint will take the required payment info and pass them to our Core Payment API and return the resultant response.

<!-- After the payment cycle ends, the user will be redirected to the url filled while creating the API Payment and will return member id and transaction id as query paramaters. -->

## REQUEST

### testing server:

`POST https://staging.xpay.app/api/payments/pay/variable-amount`

### production(Live) server:

`POST https://community.xpay.app/api/payments/pay/variable-amount`

## Parameters

### Authorization

This method requires authorization, supply the header with a key value pair with that structure

```json
"x-api-key" : string
```

#### Required Properties

| Property name | Value  | Description                      | Notes                          |
| ------------- | ------ | -------------------------------- | ------------------------------ |
| x-api-key     | string | API key linked to your community | [generate API key](api_key.md) |

​

## Request body

### Required Properties

| Property name             | Value   | Description                                       | Notes                                                                                                                                                                                                     |
| ------------------------- | ------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| community_id              | string  | ID that is uniques to your community              |                                                                                                                                                                                                           |
| amount_piasters           | integer | represents the amount you want to charge the user | if your community fees is included in bill then use the value returned from [prepare amount endpoint](prepare_amount.md) , otherwise use the amount you want to charge the user directly in **piasters**. |
| variable_amount_id        | integer | ID that refrences an **API Payment**              | [create/view your api payments](api_payments.md)                                                                                                                                                          |
| pay_using                 | string  | user payment method                               | [see payment available payment methods](#payment-options)                                                                                                                                                 |
| billing_data.name         | string  | user first and last name                          | must contain first and last name in **english letters** with space between them.                                                                                                                          |
| billing_data.email        | string  | user email                                        |                                                                                                                                                                                                           |
| billing_data.phone_number | string  | user phone number                                 | **must contain country code** prefixed                                                                                                                                                                    |

## Response

If successful, this method returns a response body with the following structure:

```json
{
  "status": {
    "code": integer,
    "message": string,
    "errors": []
  },
  "data": {
    "iframe_url": string,
    "transaction_id": integer,
    "transaction_status": string,
    "transaction_uuid": string
  },
  "count": integer,
  "next": string,
  "previous": string
}
```

| Property name      | Value   | Description                     | Notes                                                                                                                     |
| ------------------ | ------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| iframe_url         | string  | iframe url                      | you can either embed that url in your website or redirect your user it so he/she can proceed with the payment process at. |
| transaction_id     | integer | transaction ID in XPay system   |                                                                                                                           |
| transaction_uuid   | string  | transaction UUID in XPay system | you can use this value to retrieve transaction info in your app. [see available payment methods](#3-api-key)              |
| transaction_status | string  | transaction status              |                                                                                                                           |

## Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Request body-->

```json
{
  "billing_data": {
    "name": "Islam Rostom",
    "email": "irostom@xpay.app",
    "phone_number": "+201119045759"
  },
  "amount_piasters": 5000,
  "variable_amount_id": 4,
  "community_id": "1",
  "pay_using": "card"
}
```

<!--Response body-->

```json
{
  "status": {
    "code": 200,
    "message": "success",
    "errors": []
  },
  "data": {
    "iframe_url": "https://dev-payment.xpay.app/core/payment_iframe/2733/",
    "transaction_id": 3220,
    "transaction_status": "SUCCESSFUL",
    "transaction_uuid": "94fdb93f-c7f0-4b4d-8c8f-1c463c931344"
  },
  "count": null,
  "next": null,
  "previous": null
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Payment Options

There are three payment options available at the moment

- card
- cash collection
- kiosk (aman / masary)

### Pay using card

​to use payment using card, just [follow the example above](#example).

### Pay using kiosk

​to use payment using kiosk,change the value of `<pay_using>` attribute in the request body to `"kiosk"`.

#### Request body

```json
{
  "pay_using": "kiosk"
}
```

#### Response

If successful, this method returns a response body with the following structure example:

```json
{
  "status": {
    "code": integer,
    "message": string,
    "errors": []
  },
  "data": {
    "iframe_url": string,
    "transaction_id": integer,
    "transaction_status": string,
    "transaction_uuid": string,
    "message": string,
    "bill_refrence": integer
  },
  "count": integer,
  "next": string,
  "previous": string
}
```

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Request body-->

```json
{
  "billing_data": {
    "name": "Islam Rostom",
    "email": "irostom@xpay.app",
    "phone_number": "+201119045759"
  },
  "amount_piasters": 5000,
  "variable_amount_id": 4,
  "community_id": "1",
  "pay_using": "kiosk"
}
```

<!--Response body-->

```json
{
  "status": {
    "code": 200,
    "message": "success",
    "errors": []
  },
  "data": {
		"iframe_url": null,
		"transaction_id": 3220,
		"transaction_status": "PENDING",
		"transaction_uuid": "94fdb93f-c7f0-4b4d-8c8f-1c463c931344"
		"message": "Go to the nearest kiosk that has Masary/Aman payment machines and ask the seller to pay for(Madfouaat Mutanouea Accept مدفوعات متنوعة اكسبت) and give them that number 4424",
		"bill_reference": 4424
	},
  "count": null,
  "next": null,
  "previous": null
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Pay using cash collection

​to use payment using cash collection option, you need to change two things in the default payload:

- supply the billing info attribute with this structure instead of the default one
- change the value of `<pay_using>` attribute to `cash`

#### Request body

```json
{
  "billing_data": {
    "name": string,
    "email": string,
    "phone_number": string,
    "country": string,
    "state": string,
    "city": string,
    "street": string,
    "building": string,
    "apartment": string,
    "floor": string
  },
  "pay_using": "cash"
}
```

Notes:

- you can find all state-city combinations in this [JSON file](assets/state-city.json).

#### Response

If successful, this method returns a response body with the following structure example:

```json
{
  "status": {
    "code": integer,
    "message": string,
    "errors": []
  },
  "data": {
    "iframe_url": string,
    "transaction_id": integer,
    "transaction_status": string,
    "transaction_uuid": string,
    "message": string
  },
  "count": integer,
  "next": string,
  "previous": string
}
```

#### Example

<!--DOCUSAURUS_CODE_TABS-->
<!--Request body-->

```json
{
  "billing_data": {
    "name": "Islam Rostom",
    "email": "islam.rostom93@gmail.com",
    "phone_number": "+201119045759",
    "country": "EG",
    "state": "Al Meniya",
    "city": "Mghagha",
    "street": "random street name",
    "building": "5",
    "apartment": "5",
    "floor": "5"
  },
  "amount_piasters": 5000,
  "variable_amount_id": 4,
  "community_id": "1",
  "pay_using": "card"
}
```

<!--Reponse body-->

```json
{
  "status": {
    "code": 200,
    "message": "success",
    "errors": []
  },
  "data": {
    "iframe_url": null,
    "transaction_id": 3273,
    "transaction_status": "PENDING",
    "transaction_uuid": "411889e5-fc8f-4db3-810d-c1beddb5a2a4",
    "message": "Our representative will go to the address you provided to collect the cash from you"
  },
  "count": null,
  "next": null,
  "previous": null
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
