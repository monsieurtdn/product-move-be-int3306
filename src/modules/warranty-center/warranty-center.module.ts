import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
    ProductLine,
    ProductLineSchema,
} from '../product/schemas/product-line.schema';
import {
    ProductStatusTransition,
    ProductStatusTransitionSchema,
} from '../product/schemas/product-status-transition.schema';
import { Product, ProductSchema } from '../product/schemas/product.schema';
import { ProductService } from '../product/services/product.service';
import { WarrantyService } from './services/warranty.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: ProductStatusTransition.name,
                schema: ProductStatusTransitionSchema,
            },
        ]),
        MongooseModule.forFeature([
            { name: Product.name, schema: ProductSchema },
        ]),
        MongooseModule.forFeature([
            { name: ProductLine.name, schema: ProductLineSchema },
        ]),
    ],
    controllers: [],
    providers: [WarrantyService, ProductService],
})
export class warrantyCenterModule {}
