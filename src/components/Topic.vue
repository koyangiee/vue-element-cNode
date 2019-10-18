<template>
    <div>
        <div>
            <div class="topic" v-for="item in list" :key="item.id">
                <router-link :to="{ path: `/user/${item.author.loginname}` }">
                    <img :src="item.author.avatar_url" :alt="item.author.loginname">
                </router-link>
                <span class="count"><i>{{ item.reply_count }}</i><i> / {{ item.visit_count }}</i></span>

                <el-tag type="success" v-if="item.top === true">置顶</el-tag>
                <el-tag type="danger" v-else-if="item.good === true">精华</el-tag>
                <el-tag v-else-if="item.tab === 'share'">分享</el-tag>
                <el-tag type="warning" v-else-if="item.tab === 'ask'">问答</el-tag>
                <el-tag type="info" v-else-if="item.tab === 'job'">招聘</el-tag>
                <el-tag type="info" v-else>未知</el-tag>

                <router-link :to="{ path: `/content/${ item.id }` }" class="title">{{ item.title }}</router-link>
                <span class="time">{{ item.last_reply_at | formatDate }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Topic",
    props: ['list'],
    data(){
        return {
            
        }
    }
}
</script>

<style lang="less">
    .topic{
        display: flex;
        //flex-direction 定义主轴的方向 column
        flex-direction: row;
        //flex-wrap 定义如何换行
        flex-wrap: nowrap;
        //justify-content 定义对齐方式
        justify-content: space-between;
        //align-items 定义项目对齐
        align-items: center;
        font-size: 16px;
        margin-bottom: 15px;

        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }

        .count{
            display: block;
            width: 100px;
            text-align: center;

            i:first-child{
                font-size: 17px;
                color:#409eff;
            }
        }

        .title{
            width: 60%;
            display: block;
            text-decoration: none;
            color: #80bd01;
        }
    }
</style>