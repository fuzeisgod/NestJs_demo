# Nest 笔记整理

## 前期准备

1. 下载全局 Nest CLI 

   ```
   npm i -g @nestjs/cli
   ```

2.  创建新项目

    ```
    nest new project-name
    ```

3.  vscode 插件下载

    下载插件 `NestJs Snippets` 
  
4. 运行

   ```
   npm run start:dev
   ```

   



## 项目构成

​	模块 -> 控制器 -> 路由



## nest 相关命令

+ 获取帮助

  ```
  nest -h
  ```

+ 创建新模块

  ```
  nest g mo your-module-name
  ```

+ 创建新控制器

  ```
  // 与模块同名
  nest g co your-module-name
  ```

  



## 可视化 Api 文档配置

1. 下载

   ```
   npm install --save @nestjs/swagger swagger-ui-express
   ```

2. `main.ts` 引入及配置

   ```typescript
   import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
   ...
   
   async function bootstrap() {
     ...
   
     // swagger 的配置信息，分别是 Api文档的总标题，总描述，版本号。
     const options = new DocumentBuilder()
       .setTitle('NestJs 博客api')
       .setDescription('nestjs项目')
       .setVersion('1.0')
       .build();
     const document = SwaggerModule.createDocument(app, options);
     // 这里的 api-docs 是api文档的路由地址，即 '/api-docs'
     SwaggerModule.setup('api-docs', app, document);
   
     ...
   }
   bootstrap();
   ```

3. 注解相关 api

   - api 文档模块名称 `ApiTags`

     ```typescript
     @ApiTags('帖子')
     export class PostsController {
        ...
     }
     ```

   - api 文档接口描述 ` ApiOperation`

     ```typescript
     
     export class PostsController {
        @Get()
        @ApiOperation({ summary: '显示博客列表' })
        getData(){
          ...
        }
     }
     ```

   - 参数说明 `ApiPropertyOptional` 

     ```typescript
     // 参数约束类型
     class CreatePostDto {
         @ApiPropertyOptional({ description: '帖子标题' })
         title: string;
         @ApiPropertyOptional({ description: '帖子内容' })
         content: string;
     }
     ```

     