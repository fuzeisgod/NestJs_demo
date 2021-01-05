import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // 项目由模块（AppModule）构成，而模块中又包含着控制器（AppController），控制器中配置路由
  // 模块 -> 控制器 -> 路由
  const app = await NestFactory.create(AppModule);

  // swagger 的配置信息，分别是 Api文档的总标题，总描述，版本号。
  const options = new DocumentBuilder()
    .setTitle('NestJs 博客api')
    .setDescription('nestjs项目')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  // 这里的 api-docs 是api文档的路由地址，即 '/api-docs'
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
