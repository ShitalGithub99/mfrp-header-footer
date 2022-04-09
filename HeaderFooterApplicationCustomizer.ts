import { Log } from '@microsoft/sp-core-library';
    import {
      BaseApplicationCustomizer, PlaceholderName,
      PlaceholderProvider,PlaceholderContent
      
      
    } from '@microsoft/sp-application-base';
    import { Dialog } from '@microsoft/sp-dialog';
    
    import * as strings from 'HeaderFooterApplicationCustomizerStrings';
    
    const LOG_SOURCE: string = 'HeaderFooterApplicationCustomizer';
    
    /**
     * If your command set uses the ClientSideComponentProperties JSON input,
     * it will be deserialized into the BaseExtension.properties object.
     * You can define an interface to describe it.
     */
    export interface IHeaderFooterApplicationCustomizerProperties {
      // This is an example; replace with your own property
      testMessage: string;
    }
    
    /** A Custom Action which can be run during execution of a Client Side Application */
    export default class HeaderFooterApplicationCustomizer
      extends BaseApplicationCustomizer<IHeaderFooterApplicationCustomizerProperties> {
    
        public onInit(): Promise<void> {
          Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
       
          let message: string = this.properties.testMessage;
          if (!message) {
            message = '(No properties were provided.)';
          }
       
          
       
          let topPlaceholder: PlaceholderContent = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top); 
              if (topPlaceholder) { 
                  topPlaceholder.domElement.innerHTML = '<ul style="list-style-type: none;margin: 0;list-style-type: none;margin: 0;padding: 0;overflow: hidden;background-color: #333;"><li style=" display: inline; float: left;"><a style="display: block;color: white;text-align: center;padding: 14px 16px;text-decoration: none;" href="https://lq68.sharepoint.com/sites/SalesPortal2/SitePages/Home.aspx">Home</a></li><li style=" display: inline; float: left;"><li style=" display: inline; float: left;" ><a style="display: block;color: white;text-align: center;padding: 14px 16px;text-decoration: none;" href="https://lq68.sharepoint.com/sites/SalesPortal2/Lists/Vendors/AllItems.aspx">Vendor</a></li><li style=" display: inline; float: left;"><a style="display: block;color: white;text-align: center;padding: 14px 16px;text-decoration: none;" href="https://lq68.sharepoint.com/sites/SalesPortal2/Lists/Product/AllItems.aspx">Products</a></li><li style=" display: inline; float: left;"><a style="display: block;color: white;text-align: center;padding: 14px 16px;text-decoration: none;" href="https://lq68.sharepoint.com/sites/SalesPortal2/Lists/Order%20List/AllItems.aspx">Orders</a></li></ul>';
                  
                  
          let bottomPlaceholder: PlaceholderContent = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom); 
              if (bottomPlaceholder) { 
                  bottomPlaceholder.domElement.innerHTML = "<div style='background-color: white;height: 35px;'><div style='text-align:right; color: teal' ><h4>Created by Shital @2022</h4></div> </div>";
              
                  
           return Promise.resolve();
        }
      }
    }
      }
        