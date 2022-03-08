import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
    namespace Schemas {
        export interface GenericResponse {
            success: boolean;
        }
        export interface PairBody {
            serviceName: string;
            serviceImageUrl: string;
        }
        export interface PairResponse {
            success: boolean;
            reason: string;
        }
        /**
         * Construct a type with a set of properties K of type T
         */
        export interface RecordStringUnknown {
        }
        export interface Status {
            success: boolean;
            status: string;
            state: number; // double
        }
    }
}
declare namespace Paths {
    namespace Device {
        namespace Responses {
            export type $200 = /* Construct a type with a set of properties K of type T */ Components.Schemas.RecordStringUnknown;
        }
    }
    namespace Pair {
        export interface HeaderParameters {
            Authorization: Parameters.Authorization;
        }
        namespace Parameters {
            export type Authorization = string;
        }
        export type RequestBody = Components.Schemas.PairBody;
        namespace Responses {
            export type $200 = Components.Schemas.PairResponse;
        }
    }
    namespace Status {
        namespace Responses {
            export type $200 = Components.Schemas.Status;
        }
    }
    namespace VerifyAuth {
        namespace Responses {
            export type $200 = Components.Schemas.GenericResponse;
            export interface $401 {
            }
        }
    }
}

export interface OperationMethods {
  /**
   * VerifyAuth
   */
  'VerifyAuth'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.VerifyAuth.Responses.$200>
  /**
   * Status
   */
  'Status'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Status.Responses.$200>
  /**
   * Device
   */
  'Device'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Device.Responses.$200>
  /**
   * Pair
   */
  'Pair'(
    parameters?: Parameters<Paths.Pair.HeaderParameters> | null,
    data?: Paths.Pair.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Pair.Responses.$200>
}

export interface PathsDictionary {
  ['/auth/verify']: {
    /**
     * VerifyAuth
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.VerifyAuth.Responses.$200>
  }
  ['/status']: {
    /**
     * Status
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Status.Responses.$200>
  }
  ['/device']: {
    /**
     * Device
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Device.Responses.$200>
  }
  ['/pair']: {
    /**
     * Pair
     */
    'post'(
      parameters?: Parameters<Paths.Pair.HeaderParameters> | null,
      data?: Paths.Pair.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Pair.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
