import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiPropertyOptional, ApiTags } from '@nestjs/swagger'

// 标识创建帖子需要传递数据的类型约束
class CreatePostDto {
    @ApiPropertyOptional({ description: '帖子标题' })
    title: string;
    @ApiPropertyOptional({ description: '帖子内容' })
    content: string;
}

// 模块路由地址 根路径后加上 '/posts'
@Controller('posts')
// Api 文档中的模块名称
@ApiTags('帖子')
export class PostsController {
    // get 请求，地址是默认空地址，跟在模块路由地址后，也就是 '/posts'
    @Get()
    // Api 文档中对该接口的描述
    @ApiOperation({ summary: '显示博客列表' })
    index() {
        return [
            { id: 1 },
            { id: 1 },
            { id: 1 },
            { id: 1 },
            { id: 1 }
        ]
    }

    @Post()
    @ApiOperation({ summary: '创建帖子' })
    // 参数的修饰器，@Body() body，表示提取出了 req.body，这个 body 就是请求体传递的对象
    // CreatePostDto 类型约束了需传递对象的格式
    create(@Body() body: CreatePostDto, @Query() query, @Param() params) {
        return {
            body
        }
    }

    @Get(':id')
    detail() {
        return {
            id: 1,
            title: 'aaaa'
        }
    }
}
