import {  BadRequestException, createParamDecorator, ExecutionContext } from "@nestjs/common";

export const isNum = createParamDecorator(
    (data: string, ctx: ExecutionContext)=>{
        const request = ctx.switchToHttp().getRequest();
        if (!Number.isInteger(request.body[data])){
            throw new BadRequestException(`id must be a number conforming to the specified constraints, change ${data}`)
        }
})

export const isStr = createParamDecorator(
    (data: string, ctx: ExecutionContext)=>{
        const request = ctx.switchToHttp().getRequest();
        if (!(typeof request.body[data]=="string")){
            throw new BadRequestException(`id must be a string conforming to the specified constraints, change ${data}`)
        }
})

