import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductLine } from './entities/product-line.entity';
import { ProductStatusTransition } from './entities/product-status-transition.entity';
import { Product } from './entities/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './services/product.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductLine]),
        TypeOrmModule.forFeature([Product]),
        TypeOrmModule.forFeature([ProductStatusTransition]),
    ],
    controllers: [ProductController],
    providers: [JwtService, ProductService],
})
export class ProductModule {}
