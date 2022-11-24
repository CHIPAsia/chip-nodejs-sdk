declare namespace publicrestapi {
  class ApiClient {
    static instance: ApiClient
    basePath: string
    token: string
  }

  class PaymentMethods {
    available_payment_methods: string[]
    by_country: { [country: string] : string[] }
    country_names: { [country: string] : string }
    names: { [country: string] : string }
    card_methods: string[]
  }

  class ClientDetails {
    constructor(email: string)
    email: string
    phone: string
    full_name: string
    personal_code: string
    street_address: string
    country: string
    city: string
    zip_code: string
    shipping_street_address: string
    shipping_country: string
    shipping_city: string
    shipping_zip_code: string
    cc: string[]
    bcc: string[]
    legal_name: string
    brand_name: string
    registration_number: string
    tax_number: string
  }

  class Product {
    constructor(name: string, price: number)
    name: string
    quantity: number
    price: number
    discount: number
    tax_percent: number
  }

  class PurchaseDetails {
    constructor(products: Product[])
    currency: string
    products: Product[]
    total: number
    language: string
    notes: string
    debt: number
    subtotal_override: number
    total_tax_override: number
    total_discount_override: number
    total_override: number
  }

  class PaymentDetails {
    is_outgoing: boolean
    payment_type: string
    amount: number
    currency: string
    net_amount: number
    fee_amount: number
    pending_amount: number
    pending_unfreeze_on: number
    description: string
    paid_on: number
    remote_paid_on: number
  }

  class BankAccount {
    bank_account: string
    bank_code: string
  }

  class IssuerDetails {
    website: string
    legal_street_address: string
    legal_country: string
    legal_city: string
    legal_zip_code: string
    bank_accounts: BankAccount[]
    legal_name: string
    brand_name: string
    registration_number: string
    tax_number: string
  }

  class Purchase {
    id: string
    client: ClientDetails
    purchase: PurchaseDetails
    payment: PaymentDetails
    issuer_details: IssuerDetails
    status: string
    status_history: any[]
    viewed_on: number
    company_id: string
    is_test: boolean
    user_id: string
    brand_id: string
    billing_template_id: string
    client_id: string
    send_receipt: boolean
    is_recurring_token: boolean
    recurring_token: string
    skip_capture: boolean
    reference_generated: string
    reference: string
    issued: string
    due: number
    refund_availability: string
    refundable_amount: number
    currency_conversion: any
    payment_method_whitelist: string[]
    success_redirect: string
    failure_redirect: string
    cancel_redirect: string
    success_callback: string
    creator_agent: string
    platform: string
    product: string
    created_from_ip: string
    invoice_url: string
    checkout_url: string
    direct_post_url: string

  }

  interface Callback<T> {
    (error: any, data: T, response: any): void
  }

  interface PaymentOpts {
    country: string
    recurring: boolean
    skipCapture: boolean
    preauthorization: boolean
    callback: Callback<any>
  }

  class PaymentApi {
    paymentMethods(brandId: string, currency: string, opts: PaymentOpts, callback: Callback<PaymentMethods>)
    purchasesCancel(id: string, callback: Callback<Purchase>): any;
    purchasesCapture(id: string, amount: number, callback: Callback<Purchase>): any;
    purchasesCharge(id: string, recurringToken: any, callback: Callback<Purchase>): any;
    purchasesCreate(purchase: Purchase, callback: Callback<Purchase>): any;
    purchasesDeleteRecurringToken(id: string, callback: Callback<Purchase>): any;
    purchasesRead(id: string, callback: Callback<Purchase>): any;
    purchasesRefund(id: string, amount: number, callback: Callback<Purchase>): any;
    purchasesRelease(id: string, callback: Callback<Purchase>): any;
    verify(content: string, signature: string, publicKey: string): boolean;
  }
}

export default publicrestapi
