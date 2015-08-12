/*
 * Copyright © 2012
 * This code is for the codeproject.com article "N-Tier Architecture and Tips" at  
 * http://www.codeproject.com/Articles/434282/A-N-Tier-Architecture-Sample-with-ASP.NET-MVC3-WCF-and-Entity-Framework. 
 * Permission to use, copy or modify this software freely is hereby granted, 
 * provided that this copyright notice appears in all orginal or modified copies 
 * 
 * This code isn't guaranteed to work correctly; it is your own responsibility for 
 * any result from using this code. 
 *                           
 * @description
 * 
 * @author  
 * @version July 18, 2012
 * @see
 * @since
 */

using System;
using System.Collections.Generic;
using System.Configuration;


//using System.Data.Entity;
//using System.Data.Objects;
//using System.Data.Services.Client;
//using System.Linq;
//using System.ServiceModel;
//using GH.Common.Framework.Persistence;
//using GH.Common.Framework.Persistence.DataServiceCxt;
//using GH.Common.ServiceLocator;
//using TMC.Business.Entities;
//using TMC.Business.Interfaces;
//using TMC.EntityFramework;
////using GH.Northwind.Persistence.DataServiceCxt;


//namespace TMC.Business
//{
//    using ObjectCxtNamespace = Persistence.ObjectCxt;
//    using DbCxtNamespace = Persistence.DbCxt;
//    using DataServiceCxtNamespace = Persistence.DataServiceCxt;
//    using ObjectCxtFrameWkNamespace = Common.Framework.Persistence.ObjectCxt;
//    using DbCxtFrameWkNamespace = Common.Framework.Persistence.DbCxt;
//    using DataServiceCxtFrameWkNamespace = Common.Framework.Persistence.DataServiceCxt;

//    [ServiceBehavior(ConcurrencyMode = ConcurrencyMode.Multiple, InstanceContextMode = InstanceContextMode.PerCall)]
//    public class NorthwindSvr : INorthwindSvr
//    {
//        static NorthwindSvr()
//        {
//            string useWcfDataService = ConfigurationManager.AppSettings["UseWcfDataService"];
//            if (useWcfDataService.ToLower() == "true")
//            {
//                string dataServiceUrl = ConfigurationSettings.AppSettings["WcfDataServiceUrl"];
//                DataCxt.Cxt = new DataServiceContext(new Uri(dataServiceUrl));
//                ServiceLocator<IPersistence<Customer>>.RegisterService<CustomerPrst>();
//                ServiceLocator<IPersistence<Product>>.RegisterService<ProductPrst>();
//                ServiceLocator<IPersistence<Order>>.RegisterService<OrderPrst>();
//                ServiceLocator<IPersistence<Order_Detail>>.RegisterService<Order_DetailPrst>();
//                ServiceLocator<IPersistence<Category>>.RegisterService<CategoryPrst>();
//                ServiceLocator<IPersistence<Supplier>>.RegisterService<SupplierPrst>();
//            }
//            else
//            {
//                if (typeof(NorthwindEntities).IsSubclassOf(typeof(ObjectContext)))
//                {
//                    // Below are commented out since now NorthwindEntities is DbContext; Uncomment them out if NorthwindEntities is ObjectContext; 

//                    /*ObjectCxtFrameWkNamespace.DataCxt.Cxt = new NorthwindEntities(); 
//                    ServiceLocator<IPersistence<Customer>>.RegisterService<ObjectCxtNamespace.CustomerPrst>();
//                    ServiceLocator<IPersistence<Product>>.RegisterService<ObjectCxtNamespace.ProductPrst>();
//                    ServiceLocator<IPersistence<Order>>.RegisterService<ObjectCxtNamespace.OrderPrst>();
//                    ServiceLocator<IPersistence<Order_Detail>>.RegisterService<ObjectCxtNamespace.Order_DetailPrst>();
//                    ServiceLocator<IPersistence<Category>>.RegisterService<ObjectCxtNamespace.CategoryPrst>();
//                    ServiceLocator<IPersistence<Supplier>>.RegisterService<ObjectCxtNamespace.SupplierPrst>();
//                     */
//                }
//                else if (typeof(NorthwindEntities).IsSubclassOf(typeof(DbContext)))
//                {
//                    Common.Framework.Persistence.DbCxt.DataCxt.Cxt = new NorthwindEntities();
//                    ServiceLocator<IPersistence<Customer>>.RegisterService<Persistence.DbCxt.CustomerPrst>();
//                    ServiceLocator<IPersistence<Product>>.RegisterService<Persistence.DbCxt.ProductPrst>();
//                    ServiceLocator<IPersistence<Order>>.RegisterService<Persistence.DbCxt.OrderPrst>();
//                    ServiceLocator<IPersistence<Order_Detail>>.RegisterService<Persistence.DbCxt.Order_DetailPrst>();
//                    ServiceLocator<IPersistence<Category>>.RegisterService<Persistence.DbCxt.CategoryPrst>();
//                    ServiceLocator<IPersistence<Supplier>>.RegisterService<Persistence.DbCxt.SupplierPrst>();
//                }
//                else
//                {
//                    throw new NotSupportedException("NorthwindSvr: static Constructor: " + typeof(NorthwindEntities) +
//                                                    " isn't a supported type.");
//                }
//            }
//        }

     

//        public List<Order> GetOrders()
//        {
//            return PersistSvr<Order>.GetAll().ToList();
//        }
         
//    }
//}