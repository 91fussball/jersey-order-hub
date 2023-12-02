export interface User {
    client_id: number;
    client: Client;
    country_code: string;
    created_at: string;
    dashboard?: any;
    deleted_at?: any;
    email: string;
    expired_at: string;
    id: number;
    menus: string[];
    name: string;
    phone_number: string;
    refresh_token?: any;
    roles: string[];
    status: string;
    title: string;
    token: string;
    updated_at: string;
}

export interface Client {
    address: string;
    city: string;
    country: string;
    created_at: string;
    deleted_at?: any;
    description: string;
    has_merchants: boolean;
    id: number;
    industry: string;
    is_autosend_payslip_email: boolean;
    is_manual_contract_eligible: boolean;
    logo_url: string;
    name: string;
    onboard_form_primary_criteria: string;
    status: string;
    tax_id: string;
    updated_at: string;
    website_url: string;
}
