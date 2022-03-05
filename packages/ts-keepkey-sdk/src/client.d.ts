import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
    namespace Schemas {
        export interface GenricResponse {
            success: boolean;
        }
        export interface PairBody {
            serviceName: string;
            serviceImageUrl: string;
        }
        export interface Read {
            data: string;
        }
        export interface SignedTx {
            success: boolean;
            status: string;
            signedTx: any;
        }
        export interface Status {
            success: boolean;
            status: string;
            state: number; // double
        }
        export interface User {
            online: boolean;
            accounts: any;
            balances: any;
        }
        export interface Write {
            output: string;
        }
    }
}
declare namespace Paths {
    namespace ApplyPolicy {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace ApplySettings {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace BinanceGetAddress {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace BtcGetAddress {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace BtcSignTx {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace ChangePin {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace CosmosGetAddress {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace CosmosSignTx {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace Device {
        namespace Responses {
            export type $200 = Components.Schemas.Status;
        }
    }
    namespace EthGetAddress {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace EthSignTx {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace GetPublicKeys {
        export interface HeaderParameters {
            Authorization: Parameters.Authorization;
        }
        namespace Parameters {
            export type Authorization = string;
        }
        export type RequestBody = any;
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace Health {
        namespace Responses {
            export type $200 = Components.Schemas.Status;
        }
    }
    namespace OsmosisGetAddress {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace OsmosisSignTx {
        namespace Responses {
            export type $200 = any;
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
            export type $200 = Components.Schemas.GenricResponse;
        }
    }
    namespace ReadDevice {
        namespace Responses {
            export type $200 = Components.Schemas.Read;
        }
    }
    namespace RemovePin {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace SignTransaction {
        export interface HeaderParameters {
            Authorization: Parameters.Authorization;
        }
        namespace Parameters {
            export type Authorization = string;
        }
        namespace Responses {
            export type $200 = Components.Schemas.SignedTx;
        }
    }
    namespace ThorchainGetAddress {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace ThorchainSignTx {
        namespace Responses {
            export type $200 = any;
        }
    }
    namespace User {
        export interface HeaderParameters {
            Authorization: Parameters.Authorization;
        }
        namespace Parameters {
            export type Authorization = string;
        }
        namespace Responses {
            export type $200 = Components.Schemas.User;
        }
    }
    namespace VerifyAuth {
        export interface HeaderParameters {
            Authorization: Parameters.Authorization;
        }
        namespace Parameters {
            export type Authorization = string;
        }
        namespace Responses {
            export type $200 = Components.Schemas.GenricResponse;
        }
    }
    namespace WriteDevice {
        namespace Responses {
            export type $200 = Components.Schemas.Write;
        }
    }
}

export interface OperationMethods {
  /**
   * Health
   */
  'Health'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Health.Responses.$200>
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
  /**
   * User
   */
  'User'(
    parameters?: Parameters<Paths.User.HeaderParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.User.Responses.$200>
  /**
   * VerifyAuth
   */
  'VerifyAuth'(
    parameters?: Parameters<Paths.VerifyAuth.HeaderParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.VerifyAuth.Responses.$200>
  /**
   * SignTransaction
   */
  'SignTransaction'(
    parameters?: Parameters<Paths.SignTransaction.HeaderParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SignTransaction.Responses.$200>
  /**
   * ApplyPolicy
   */
  'ApplyPolicy'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ApplyPolicy.Responses.$200>
  /**
   * ApplySettings
   */
  'ApplySettings'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ApplySettings.Responses.$200>
  /**
   * ChangePin
   */
  'ChangePin'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ChangePin.Responses.$200>
  /**
   * RemovePin
   */
  'RemovePin'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RemovePin.Responses.$200>
  /**
   * GetPublicKeys
   */
  'GetPublicKeys'(
    parameters?: Parameters<Paths.GetPublicKeys.HeaderParameters> | null,
    data?: Paths.GetPublicKeys.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPublicKeys.Responses.$200>
  /**
   * BtcGetAddress
   */
  'BtcGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.BtcGetAddress.Responses.$200>
  /**
   * EthGetAddress
   */
  'EthGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.EthGetAddress.Responses.$200>
  /**
   * ThorchainGetAddress
   */
  'ThorchainGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ThorchainGetAddress.Responses.$200>
  /**
   * OsmosisGetAddress
   */
  'OsmosisGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.OsmosisGetAddress.Responses.$200>
  /**
   * BinanceGetAddress
   */
  'BinanceGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.BinanceGetAddress.Responses.$200>
  /**
   * CosmosGetAddress
   */
  'CosmosGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CosmosGetAddress.Responses.$200>
  /**
   * BtcSignTx
   */
  'BtcSignTx'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.BtcSignTx.Responses.$200>
  /**
   * ThorchainSignTx
   */
  'ThorchainSignTx'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ThorchainSignTx.Responses.$200>
  /**
   * CosmosSignTx
   */
  'CosmosSignTx'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CosmosSignTx.Responses.$200>
  /**
   * OsmosisSignTx
   */
  'OsmosisSignTx'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.OsmosisSignTx.Responses.$200>
  /**
   * EthSignTx
   */
  'EthSignTx'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.EthSignTx.Responses.$200>
  /**
   * ReadDevice
   */
  'ReadDevice'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ReadDevice.Responses.$200>
  /**
   * WriteDevice
   */
  'WriteDevice'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WriteDevice.Responses.$200>
}

export interface PathsDictionary {
  ['/status']: {
    /**
     * Health
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Health.Responses.$200>
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
  ['/user']: {
    /**
     * User
     */
    'get'(
      parameters?: Parameters<Paths.User.HeaderParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.User.Responses.$200>
  }
  ['/auth/verify']: {
    /**
     * VerifyAuth
     */
    'get'(
      parameters?: Parameters<Paths.VerifyAuth.HeaderParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.VerifyAuth.Responses.$200>
  }
  ['/sign']: {
    /**
     * SignTransaction
     */
    'post'(
      parameters?: Parameters<Paths.SignTransaction.HeaderParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SignTransaction.Responses.$200>
  }
  ['/applyPolicy']: {
    /**
     * ApplyPolicy
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ApplyPolicy.Responses.$200>
  }
  ['/applySettings']: {
    /**
     * ApplySettings
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ApplySettings.Responses.$200>
  }
  ['/changePin']: {
    /**
     * ChangePin
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ChangePin.Responses.$200>
  }
  ['/removePin']: {
    /**
     * RemovePin
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RemovePin.Responses.$200>
  }
  ['/getPublicKeys']: {
    /**
     * GetPublicKeys
     */
    'post'(
      parameters?: Parameters<Paths.GetPublicKeys.HeaderParameters> | null,
      data?: Paths.GetPublicKeys.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPublicKeys.Responses.$200>
  }
  ['/btcGetAddress']: {
    /**
     * BtcGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.BtcGetAddress.Responses.$200>
  }
  ['/ethGetAddress']: {
    /**
     * EthGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.EthGetAddress.Responses.$200>
  }
  ['/thorchainGetAddress']: {
    /**
     * ThorchainGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ThorchainGetAddress.Responses.$200>
  }
  ['/osmosisGetAddress']: {
    /**
     * OsmosisGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.OsmosisGetAddress.Responses.$200>
  }
  ['/binanceGetAddress']: {
    /**
     * BinanceGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.BinanceGetAddress.Responses.$200>
  }
  ['/cosmosGetAddress']: {
    /**
     * CosmosGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CosmosGetAddress.Responses.$200>
  }
  ['/btcSignTx']: {
    /**
     * BtcSignTx
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.BtcSignTx.Responses.$200>
  }
  ['/thorchainSignTx']: {
    /**
     * ThorchainSignTx
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ThorchainSignTx.Responses.$200>
  }
  ['/cosmosSignTx']: {
    /**
     * CosmosSignTx
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CosmosSignTx.Responses.$200>
  }
  ['/osmosisSignTx']: {
    /**
     * OsmosisSignTx
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.OsmosisSignTx.Responses.$200>
  }
  ['/ethSignTx']: {
    /**
     * EthSignTx
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.EthSignTx.Responses.$200>
  }
  ['/exchange/device']: {
    /**
     * ReadDevice
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ReadDevice.Responses.$200>
    /**
     * WriteDevice
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WriteDevice.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
