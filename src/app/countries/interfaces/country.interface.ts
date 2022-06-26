export interface Country {
    name: Name;
    tld?: string[];
    cca2: string;
    ccn3?: string;
    cca3: string;
    cioc?: string;
    independent?: boolean;
    status: Status;
    unMember: boolean;
    currencies?: Currencies;
    idd: Idd;
    capital?: string[];
    altSpellings: string[];
    region: Region;
    subregion?: string;
    languages?: { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng: number[];
    landlocked: boolean;
    borders?: string[];
    area: number;
    demonyms?: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini?: { [key: string]: number };
    fifa?: string;
    car: Car;
    timezones: string[];
    continents: Continent[];
    flags: CoatOfArms;
    coatOfArms: CoatOfArms;
    startOfWeek: StartOfWeek;
    capitalInfo: CapitalInfo;
    postalCode?: PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side: Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    EUR?: Aed;
    MAD?: Aed;
    CKD?: Aed;
    NZD?: Aed;
    USD?: Aed;
    XCD?: Aed;
    RWF?: Aed;
    GYD?: Aed;
    BWP?: Aed;
    CNY?: Aed;
    XOF?: Aed;
    XAF?: Aed;
    THB?: Aed;
    JOD?: Aed;
    COP?: Aed;
    NOK?: Aed;
    KMF?: Aed;
    CVE?: Aed;
    AUD?: Aed;
    KID?: Aed;
    EGP?: Aed;
    ILS?: Aed;
    TMT?: Aed;
    QAR?: Aed;
    DKK?: Aed;
    RON?: Aed;
    GBP?: Aed;
    SHP?: Aed;
    INR?: Aed;
    UZS?: Aed;
    AMD?: Aed;
    KWD?: Aed;
    ANG?: Aed;
    BGN?: Aed;
    UYU?: Aed;
    VUV?: Aed;
    VND?: Aed;
    PAB?: Aed;
    IQD?: Aed;
    TWD?: Aed;
    LKR?: Aed;
    MDL?: Aed;
    STN?: Aed;
    ZAR?: Aed;
    ISK?: Aed;
    KRW?: Aed;
    CLP?: Aed;
    MUR?: Aed;
    CZK?: Aed;
    BYN?: Aed;
    GEL?: Aed;
    CHF?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    CDF?: Aed;
    SEK?: Aed;
    HUF?: Aed;
    AWG?: Aed;
    AED?: Aed;
    KPW?: Aed;
    TJS?: Aed;
    LYD?: Aed;
    YER?: Aed;
    XPF?: Aed;
    KZT?: Aed;
    LBP?: Aed;
    NGN?: Aed;
    PLN?: Aed;
    BAM?: BAM;
    DZD?: Aed;
    MGA?: Aed;
    TTD?: Aed;
    SRD?: Aed;
    NPR?: Aed;
    IDR?: Aed;
    AZN?: Aed;
    HKD?: Aed;
    RUB?: Aed;
    TVD?: Aed;
    MYR?: Aed;
    MWK?: Aed;
    SCR?: Aed;
    OMR?: Aed;
    AOA?: Aed;
    ERN?: Aed;
    MRU?: Aed;
    CAD?: Aed;
    ALL?: Aed;
    FJD?: Aed;
    SLL?: Aed;
    UAH?: Aed;
    MKD?: Aed;
    NAD?: Aed;
    WST?: Aed;
    SYP?: Aed;
    ARS?: Aed;
    MZN?: Aed;
    GNF?: Aed;
    TND?: Aed;
    FKP?: Aed;
    LSL?: Aed;
    HRK?: Aed;
    LRD?: Aed;
    PGK?: Aed;
    BIF?: Aed;
    BOB?: Aed;
    BBD?: Aed;
    GIP?: Aed;
    ETB?: Aed;
    GMD?: Aed;
    TRY?: Aed;
    KHR?: Aed;
    SDG?: BAM;
    MVR?: Aed;
    BZD?: Aed;
    KGS?: Aed;
    LAK?: Aed;
    DOP?: Aed;
    HNL?: Aed;
    SZL?: Aed;
    PEN?: Aed;
    BHD?: Aed;
    BND?: Aed;
    SGD?: Aed;
    KYD?: Aed;
    PYG?: Aed;
    IRR?: Aed;
    MOP?: Aed;
    MXN?: Aed;
    JEP?: Aed;
    SOS?: Aed;
    TZS?: Aed;
    VES?: Aed;
    MNT?: Aed;
    CRC?: Aed;
    TOP?: Aed;
    BRL?: Aed;
    ZWL?: Aed;
    BTN?: Aed;
    KES?: Aed;
    IMP?: Aed;
    HTG?: Aed;
    MMK?: Aed;
    JMD?: Aed;
    BSD?: Aed;
    FOK?: Aed;
    AFN?: Aed;
    SSP?: Aed;
    RSD?: Aed;
    NIO?: Aed;
    UGX?: Aed;
    PHP?: Aed;
    ZMW?: Aed;
    SBD?: Aed;
    GHS?: Aed;
    PKR?: Aed;
    SAR?: Aed;
    GGP?: Aed;
    GTQ?: Aed;
    JPY?: Aed;
    DJF?: Aed;
    BMD?: Aed;
    BDT?: Aed;
}

export interface Aed {
    name: string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng: Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root?: string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Name {
    common: string;
    official: string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common: string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Sunday = "sunday",
    Turday = "turday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
