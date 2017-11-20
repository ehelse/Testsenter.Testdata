﻿import { Injectable } from "@angular/core";
import { BaseRequestOptions, RequestOptions } from "@angular/http";

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

    constructor() {
        super();
        this.headers.set("Accept", "application/json" );
    }
}

export const requestOptionsProvider = { provide: RequestOptions, useClass: DefaultRequestOptions };