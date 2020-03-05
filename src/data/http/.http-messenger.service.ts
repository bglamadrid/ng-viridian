import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

/**
 * Service that communicates with a backend service through a HTTP client.
 */
export abstract class HttpMessengerService {

  protected readonly webSvcHostName = environment.backendServerHostName;
  protected readonly webSvcHostPort = environment.backendServerPort;
  protected readonly webSvcBaseURI = environment.backendServerBaseURI;

  /**
   * The base URI for all API service consumption
   */
  protected readonly apiURL = `http://${this.webSvcHostName}:${this.webSvcHostPort}/${this.webSvcBaseURI}`;

  protected abstract http: HttpClient;

  /**
   * Syntactic sugar: create a wrapper object with HttpParams.
   * The returned object may be used to include actual HTTP Parameters on any request fired up by an HttpClient.
   */
  protected httpParamsOf(object: any): { params: HttpParams } {
    return {
      params: new HttpParams({ fromObject: object })
    };
  }
}
