 /*!
 * @license
 * Copyright 2019 Alfresco, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as AlfrescoApi from 'alfresco-js-api-node';
import { ACMBackend } from './acm-backend';

export interface E2eRequestApiHelperOptions {
    pathParams?: { [key: string]: any} ;
    queryParams?: { [key: string]: any} ;
    headerParams?: { [key: string]: any} ;
    formParams?: { [key: string]: any} ;
    bodyParam?: { [key: string]: any} ;
    authNames?: string[];
    contentTypes?: string[];
    accepts?: string[];
    returnType?: any;
    contextRoot?: string;
    responseType?: 'arraybuffer'|'blob'|'document'|'json'|'text';
}

function getDefaultOptions(): E2eRequestApiHelperOptions {
    return {
        pathParams: {},
        queryParams: {},
        headerParams: {},
        formParams: {},
        bodyParam: {},
        authNames: [],
        contentTypes: ['application/json'],
        accepts: ['application/json'],
        returnType: {'String': 'String'}
    };
}

export class E2eRequestApiHelper {

    api: AlfrescoApi.OauthApi;

    constructor(private backend: ACMBackend) {
        this.api = backend.api.oauth2Auth;
    }

    private buildUrl(endPoint: string): string {
        const trimSlash = (str: string) => str.replace(/^\/|\/$/g, '');
        const host = this.backend.config.ama.backendConfig.bpmHost;
        const path = '/' + trimSlash(endPoint);

        return `${host}${path}`;
    }

    public get<T>(endPoint: string, overriddenOptions?: E2eRequestApiHelperOptions) {
        return this.request<T>('GET', endPoint, overriddenOptions);
    }

    public post<T>(endPoint: string, overriddenOptions?: E2eRequestApiHelperOptions) {
        return this.request<T>('POST', endPoint, overriddenOptions);
    }

    public put<T>(endPoint: string, overriddenOptions?: E2eRequestApiHelperOptions) {
        return this.request<T>('PUT', endPoint, overriddenOptions);
    }

    public delete<T>(endPoint: string, overriddenOptions?: E2eRequestApiHelperOptions) {
        return this.request<T>('DELETE', endPoint, overriddenOptions);
    }

    private request<T>(httpMethod: string, endPoint: string, overriddenOptions?: E2eRequestApiHelperOptions): PromiseLike<T> {

        const options = {
            ...getDefaultOptions(),
            ...overriddenOptions
        };

        const {
            pathParams,
            queryParams,
            headerParams,
            formParams,
            bodyParam,
            authNames,
            contentTypes,
            accepts,
            returnType,
            contextRoot,
            responseType
        } = options;

        return this.api.callCustomApi(
            this.buildUrl(endPoint),
            httpMethod,
            pathParams,
            queryParams,
            headerParams,
            formParams,
            bodyParam,
            authNames,
            contentTypes,
            accepts,
            returnType,
            contextRoot,
            responseType
        );
    }
}
