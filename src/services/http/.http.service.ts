import { HttpParams, HttpClient } from '@angular/common/http';

/**
 * Service that communicates with a backend service through a HTTP client.
 */
export abstract class HttpService {

  // protected webServiceProviderHostName: string = "localhost";
  // protected webServiceProviderHostPort: number = 8082;
  // protected baseURI: string = "http://"+this.webServiceProviderHostName+":"+String(this.webServiceProviderHostPort)+"/api";

  /**
   * The very
   */
  protected get baseURI(): string { return '/api'; }

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
