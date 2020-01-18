import { HttpParams } from '@angular/common/http';

export abstract class BaseHttpService {

  // protected webServiceProviderHostName: string = "localhost";
  // protected webServiceProviderHostPort: number = 8082;
  // protected baseURI: string = "http://"+this.webServiceProviderHostName+":"+String(this.webServiceProviderHostPort)+"/api";
  protected baseURI = '/api';

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
