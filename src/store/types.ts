export enum InputType {
    text,
    select,
    check,
    radio,
    area,
}

export type SelectOption = {
    label: string;
    value: string;
};

export type FormInput = {
    label: string;
    value: string;
    type: InputType;
    options?: SelectOption[];
};
