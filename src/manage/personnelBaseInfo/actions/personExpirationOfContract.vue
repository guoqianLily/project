<template>
    <div>
        <div class="posennolExpire" v-loading="loading" element-loading-text="拼命加载中"
            element-loading-background="rgba(255, 255, 255, 1)" style="width:100%;height:100%;" >
            <header >
                <el-row class="header">
                    <el-col :span="1">
                        <el-button type="primary" icon="el-icon-search" size="small" @click="seachAllData" >查询</el-button>
                        <el-button type="primary" icon="el-icon-printer" size="small" @click="export2Excel">导出</el-button>
                    </el-col>
                </el-row>
            </header>
            <section>
                <el-table :data="tableData" :height="heightItem" :max-height="heightItem" border style="width: 100%"
                    id="personnelBaseInfoTable" :header-cell-style="{padding:'8px 0'}" :cell-style="{padding:'5px 0'}">
                    <el-table-column align="center" type="index" label="序号" ></el-table-column>
                    <el-table-column prop="userName" label="姓名"></el-table-column>
                    <el-table-column prop="detpName" label="部门" ></el-table-column>
                    <el-table-column prop="titleName" label="岗位" ></el-table-column>
                    <el-table-column label="合同期限" align="center">
                        <el-table-column prop="contractBeginTime" label="开始时间" align="center" >
                        </el-table-column>
                        <el-table-column prop="contractEndTime" label="结束时间" align="center" >
                        </el-table-column>
                    </el-table-column>
                </el-table>
            </section>
        </div>
    </div>

</template>

<script>
    import API from '../../../api'
    import http from '../../../utils/http'
    import {
        mapState
    } from 'vuex'
    export default {
        data() {
            return {
                loading: true,
                formLabelWidth: '130px',
                conversionDate: [],
                labelPosition: 'right',
                tableData: [],
                heightItem: window.innerHeight - 160, // 计算表格的高度，
                LIST:[], // 导出数据
                wopts: {
                    bookType: 'xlsx',
                    bookSST: true,
                    type: 'binary',
                    cellStyles: true
                },
            }

        },
        watch: {
            heightItem(val) {
                if (!this.timer) {
                    this.heightItem = val
                    this.timer = true
                    const that = this
                    setTimeout(function () {
                        that.timer = false
                    }, 400)
                }
                deep: true
            },
        },
        computed: {
            ...mapState({
                userId: state => state.user.userId
            })
        },
        methods: {

            //查询所有的数据
            seachAllData() {
                http({
                    url:API.personExpirationOfContract,
                    method:'POST',
                    data:{
                        userId: this.$store.state.user.userId
                    }
                })
                    .then(({data,status})=>{
                        if(status == 200){
                            let dataList = data.result;
                            this.tableData = dataList;
                            this.loading = false;
                        } else {
                            this.loading = false;
                        }
                    })
                    .catch(error=>{
                        this.loading = false;
                        console.log(error);
                    })
                
            },
            getStyle(ele) {
                var style = null;
                if (window.getComputedStyle) {
                    style = window.getComputedStyle(ele, null);
                } else {
                    style = ele.currentStyle;
                }
                return style;
            },
            //导出table表格
            export2Excel() {
                let that = this;
                http({
                        url:API.personExpirationOfContract,
                        method:'POST',
                        data:{
                            userId: this.$store.state.user.userId
                        }
                    })
                    .then(({data, status}) => {
                        if (status == 200) {
                            let list = data.result;
                            this.LIST = data.result;
                            let thead = {
                                '员工合同到期清单': '员工合同到期清单',
                                'userName': '姓名',
                                'detpName': '部门',
                                'titleName': '岗位',
                                'contractBeginTime': '合同开始时间',
                                'contractEndTime': '合同结束时间',
                            }
                            var json = [{
                                    '员工合同到期清单': '',
                                    '姓名': '',
                                    '部门': '',
                                    '岗位': '',
                                    '合同开始时间': '',
                                    '合同结束时间': '',
                                },
                                {
                                    '员工合同到期清单': '序号',
                                    '姓名': '姓名',
                                    '部门': '部门',
                                    '岗位': '岗位',
                                    '合同开始时间': '合同期限',
                                    '合同结束时间': '',
                                },
                                {
                                    '员工合同到期清单': '',
                                    '姓名': '',
                                    '部门': '',
                                    '岗位': '',
                                    '合同开始时间': '开始时间',
                                    '合同结束时间': '结束时间',
                                },
            
                            ];
                            for (var i = 0; i < list.length; i++) {
                                var obj = new Object();
                                // obj['序号']=i+0;
                                for (var j in thead) {
                                    var name = thead[j];
                                    if (name == "员工合同到期清单") {
                                        obj[name] = (i + 1) + "";
                                    } else {
                                        obj[name] = list[i][j] ? list[i][j] : ''; //    name:
                                    }
            
                                }
                                json[i + 3] = obj;
                            }
                            // 模拟数据
                            this.downloadExl2(json, 'xlsx');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            
            },
            
            saveAs2(obj, fileName) {
                var tmpa = document.createElement("a");
                tmpa.download = fileName || "未命名";
                // 兼容ie 
                if ("msSaveOrOpenBlob" in navigator) {
                    window.navigator.msSaveOrOpenBlob(obj, "员工合同到期清单" + ".xlsx");
                } else {
                    tmpa.href = URL.createObjectURL(obj);
                }
                tmpa.click();
                setTimeout(function () {
                    URL.revokeObjectURL(obj);
                }, 100);
            },
            
            downloadExl2(json, type) {
                var tmpdata = json[0];
                json.unshift({});
                var keyMap = []; //获取keys
                for (var k in tmpdata) {
                    keyMap.push(k);
                    json[0][k] = k;
                }
                var tmpdata = []; //用来保存转换好的json 
                json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
                    v: v[k],
                    position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
                }))).reduce((prev, next) => prev.concat(next)).forEach((v, i) => tmpdata[v.position] = {
                    v: v.v
                });
                var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
                tmpdata["!merges"] = [{
                        s: {
                            c: 0,
                            r: 0
                        }, //开始 A1
                        e: {
                            c: 5,
                            r: 1
                        } //结束F1
                    },
                    {
                        s: {
                            c: 0,
                            r: 2
                        }, //开始 A2
                        e: {
                            c: 0,
                            r: 3
                        } //结束A3
                    },
                    {
                        s: {
                            c: 1,
                            r: 2
                        }, 
                        e: {
                            c: 1,
                            r: 3
                        } 
                    },
                    {
                        s: {
                            c: 2,
                            r: 2
                        }, 
                        e: {
                            c: 2,
                            r: 3
                        } 
                    },
                    {
                        s: {
                            c: 3,
                            r: 2
                        }, 
                        e: {
                            c: 3,
                            r: 3
                        } 
                    },
                    {
                        s: {
                            c: 4,
                            r: 2
                        }, 
                        e: {
                            c: 5,
                            r: 2
                        } 
                    },
            
                ]; //合并单元格
            
                //        边框样式
                let border = {
                    bottom: {
                        style: "thin",
                        color: {
                            rgb: "000000"
                        }
                    },
                    top: {
                        style: "thin",
                        color: {
                            rgb: "000000"
                        }
                    },
                    left: {
                        style: "thin",
                        color: {
                            rgb: "000000"
                        }
                    },
                    right: {
                        style: "thin",
                        color: {
                            rgb: "000000"
                        }
                    }
                };
                //加粗
                let style0 = {
                    border: border,
                    alignment: {
                        horizontal: 'center',
                        wrapText: true,
                        vertical: "center"
                    },
                    font: {
                        name: '宋体',
                        sz: 24,
                        bold: true,
                        color: {
                            rgb: "000000"
                        },
                        outline: true
                    },
                    fill: {
                    fgColor: {
                            rgb: "FFFFFF"
                        },
                        bgColor: {
                            indexed: 64,
                            // rgb: "red"
                        },
                    }
                };
                let style1 = {
                    border: border,
                    alignment: {
                        horizontal: 'center',
                        wrapText: true,
                        vertical: "center"
                    },
                    font: {
                        name: '宋体',
                        sz: 12,
                        bold: true,
                        color: {
                            rgb: "000000"
                        },
                        outline: true
                    },
                    fill: {
                        bgColor: {
                            indexed: 64
                        }
                    }
                };
                //不加粗
                let style2 = {
                    border: border,
                    alignment: {
                        horizontal: 'center',
                        wrapText: true,
                        vertical: "center"
                    },
                    font: {
                        name: '宋体',
                        sz: 12,
                        color: {
                            rgb: "000000"
                        },
                        outline: true
                    }
                };
                //蓝底加粗
                let style3 = {
                    border: border,
                    alignment: {
                        horizontal: 'center',
                        wrapText: true,
                        vertical: "center"
                    },
                    font: {
                        name: '宋体',
                        sz: 12,
                        bold: false,
                        color: {
                            rgb: "000000"
                        },
                        outline: true
                    },
                    fill: {
                        fgColor: {
                            rgb: "B8CCE4"
                        },
                        bgColor: {
                            // indexed: 64,
                            rgb: "red"
                        },
                        // fgColor: {
                        //     rgb: "FFFF00"
                        // }
                    }
                };
                //        第一二行样式
            
            
                //第一二行样式
                tmpdata["A1"].s = style0;
                tmpdata["A3"].s = style3;
                tmpdata["B3"].s = style3;
                tmpdata["C3"].s = style3;
                tmpdata["D3"].s = style3;
                tmpdata["E3"].s = style3;
                tmpdata["F3"].s = style3;
                tmpdata["A4"].s = style3;
                tmpdata["B4"].s = style3;
                tmpdata["C4"].s = style3;
                tmpdata["D4"].s = style3;
                tmpdata["E4"].s = style3;
                tmpdata["F4"].s = style3;
                //  //剩余行样式
                for (let i = 5; i < this.tableData.length + 5; i++) {
                    tmpdata["A" + i].s = style2;
                    tmpdata["B" + i].s = style2;
                    tmpdata["C" + i].s = style2;
                    tmpdata["D" + i].s = style2;
                    tmpdata["E" + i].s = style2;
                    tmpdata["F" + i].s = style2;
                }
                tmpdata["!cols"] = [ //设置列宽度
                    {
                        wpx: 50
                    }, //序号
                    {
                        wpx: 100
                    }, //发票抬头
                    {
                        wpx: 130
                    }, //开票内容
                    {
                        wpx: 130
                    }, //发票金额
                    {
                        wpx: 120
                    }, //对应工作量月份
                    {
                        wpx: 120
                    }, //预计回款时间
                ];
                tmpdata["!rows"] = [ //设置行高度
                    {
                        hpt: 100
                    }, //序号
                ];
                var tmpWB = {
                    SheetNames: ['员工合同到期清单'], //保存的表标题
                    Sheets: {
                        '员工合同到期清单': Object.assign({},
                            tmpdata, //内容
                            {
                                '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
                            })
                    }
                };
                var tmpDown = new Blob([this.s2ab(XLSX.write(tmpWB, {
                        bookType: (type == undefined ? 'xlsx' : type),
                        bookSST: false,
                        type: 'binary'
                    } //这里的数据是用来定义导出的格式类型
                ))], {
                    type: ""
                });
                this.saveAs2(tmpDown, '员工合同到期清单' + '.' + (this.wopts.bookType == "biff2" ? "xlsx" :
                    this.wopts.bookType))
            },
            // 获取26个英文字母用来表示excel的列
            getCharCol(n) {
                let temCol = '',
                    s = '',
                    m = 0
                while (n > 0) {
                    m = n % 26 + 1
                    s = String.fromCharCode(m + 64) + s
                    n = (n - m) / 26
                }
                return s
            },
            s2ab(s) {
                if (typeof ArrayBuffer !== 'undefined') {
                    var buf = new ArrayBuffer(s.length);
                    var view = new Uint8Array(buf);
                    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
                    return buf;
                } else {
                    var buf = new Array(s.length);
                    for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
                    return buf;
                }
            },

        },
        created() {
            this.seachAllData();
        },
        mounted() {
            const that = this
            window.onresize = () => { //用于处理
                return (() => {
                    that.heightItem = window.innerHeight - 160;

                })()
            };



        },


    }
</script>

<style lang="scss">
    .posennolExpire {
        header {
            width: 100%;
            // height: 136px;
            padding: 10px 0;
            line-height: 30px;
            border-bottom: 1px solid #ebeef5;

            .el-row {
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                display: flex;
                margin-bottom: 14px;
            }

            .title {
                width: 80px;
                text-align: right;
            }

            .el-col-6,
            .el-col-5,
            .el-col-1,
            .el-col-4 {

                display: flex;
            }

            .selectbox {
                width: 70%;
                float: right;
                height: 100%;
                line-height: 30px;
                text-align: right;
                padding-right: 10px;
                box-sizing: border-box;

                li {
                    font-size: 14px;
                    color: #333;
                    font-weight: 600;
                    display: inline-block;

                    .el-input__inner {
                        height: 30px;
                        line-height: 30px;
                    }

                    .el-select {
                        width: 150px;
                    }

                    .el-input__icon {
                        line-height: 30px;
                    }

                    label {
                        margin: 0 8px;
                    }
                }

            }
        }

        .el-button--small,
        .el-button--small.is-round {
            padding: 6px
        }

        .el-button--mini,
        .el-button--mini.is-round {
            padding: 6px;
        }

        .el-input--suffix .el-input__inner {
            padding-right: 15px;
        }

        .el-table th.gutter {
            display: table-cell !important;
        }

        .el-input {
            width: auto !important;
        }
    }

</style>