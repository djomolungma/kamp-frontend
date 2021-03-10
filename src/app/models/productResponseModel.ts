import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface ProductResponseModel extends ResponseModel{ //(extends == inhetirance)
    data:Product[]
}