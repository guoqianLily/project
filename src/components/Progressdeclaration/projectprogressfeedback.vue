<template>
    <div class="projectprogressfeedback">
        <el-row>
            <div class="bigTitle">{{name}}</div>
        </el-row>
        <div class="feedbackcontent">
            <el-form :model="detailForm" :rules="rules" ref="ruleForm" label-width="120px">
                <el-form-item label="当前时间" prop="">
                    <template v-show="!show"><span>{{detailForm.code}}</span></template>
                    <el-input v-model="detailForm.code" v-show="show"></el-input>
                </el-form-item>
                <el-form-item label="当月目标" prop="">
                    <quillEditor @content="getcontent" v-bind:content="detailForm.dockingDepartment" style="height:150px;" v-model="detailForm.dockingDepartment">
                    </quillEditor>
                </el-form-item>
                <el-form-item label="本周进展" prop="">
                    <quillEditor @content="getcontent" v-bind:content="detailForm.wayAddcontent"  style="height:150px;" v-model="detailForm.wayAddcontent">
                    </quillEditor>
                </el-form-item>
                 <el-form-item label="项目进展分类" prop="">
                     <el-select v-model="typeValue" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                 </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    import quillEditor from '../ue'
    import quillEditor2 from '../ue2'
    export default {
        components: {
            quillEditor,
            quillEditor2
        },
        data() {
            return {
                typeValue:'',
                name: '项目详情',
                detailForm: {
                    code: '1-XM01',
                    name: '原28家互联工厂升级提效并满负荷',
                    platform: '海尔智家平台(智慧家庭)',
                    time: '2020年9月',
                    dockingDepartment: 'dddddd',
                    wayAddcontent: 'ttttt',
                },
                rules: {},
                str: '',
                show: false,
                options: [{
                    value: '海尔智家平台(智慧家庭)',
                    label: '海尔智家平台(智慧家庭)'
                }, {
                    value: 'COSMO平台(工业互联网平台)',
                    label: 'COSMO平台(工业互联网平台)'
                }, {
                    value: '海纳云平台(智慧社区/园区)',
                    label: '海纳云平台(智慧社区/园区)'
                }, {
                    value: '盈康一生(生命健康/生态健康)',
                    label: '盈康一生(生命健康/生态健康)'
                }, {
                    value: '海创汇平台(创业孵化平台)',
                    label: '海创汇平台(创业孵化平台)'
                }]
            }
        },
        methods: {
            //获取文本编辑器的内容
            getcontent(data) {
                this.str = data;
            },
        },
        watch:{
            detailForm(val, oldVal){
                console.log(val)
            }

        }
    }
</script>
<style lang="scss">
    .projectprogressfeedback {
        width: 100%;
        .el-row {
            width: 100%;
            height: 35px;
            line-height: 35px;
            display: flex;

            .bigTitle {
                color: #02A7F0;
                font-size: 14px;
                float: left;
                position: relative;
                width: 95%;
            }

            .returnBtn {
                color: #02A7F0;
                font-size: 14px;
                float: right;
            }
        }

        .feedbackcontent {
            width: 100%;
            height: calc(100% - 35px);
            .el-form {
                .el-form-item {
                    position: relative;
                    float: left;
                    width: 100%;
                    .el-form-item__label{
                        color: #02A7F0;
                    }
                }
            }
        }
    }
</style>