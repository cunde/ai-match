(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f0f9414"],{"0203":function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA+klEQVRIS+2UPxLBQBSHf89QGJULKLE3oNdwFPSiSyd6HIVGzw0WpQukyigYz8hk4l929ymMJqlfvm/y9tsQfvzQN3zlcf8+rwNaSN8TC5THHTCWMZjQ0wGtJRKRoDnmOl2xBVBNoCEX0NpN6OCSOAU1j6sVjuH1N9ghIrSOAYU2iV3gc1GdsALQMUDWuowufLqYJFaBGvEMwMCxhrme0vBrQVwMY+7acXLoA1NZmV/wVExJJADOprI+BBnFCB3ILOtFkBSzAdCQUt/m9hGh/VzWQ+AuRup8KSsVCIuRStKynBdNjZhtVD0lKyMXIF8R8or+fw+k/wbT3A1EiHcZfL4/gwAAAABJRU5ErkJggg=="},"3d8f":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"challenge"},[e("nav-bar",{attrs:{page:"second",linkType:"competition"}}),e("div",{staticClass:"content"},[e("step-two",{attrs:{taskType:t.taskType,lvText:t.contentText,lvTitle:t.contentTitle}})],1),e("bottom-nav-bar",{attrs:{step:t.step,next:t.next}})],1)},i=[],d=e("d000"),p=e("de7d"),l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"upload-container"},[e("div",{staticClass:"game-intro"},[e("div",{staticClass:"title"},[t._v(t._s(t.lvTitle))]),e("div",{staticClass:"desc",domProps:{innerHTML:t._s(t.lvText)}})]),e("div",{staticClass:"op-area"},[e("div",{staticClass:"step-two",on:{click:t.handleLink}},[t._m(0),e("div",{staticClass:"desc"},[t._v("立即答题")])]),e("div",{staticClass:"step-two",on:{click:t.upload}},[t._m(1),e("div",{staticClass:"desc"},[t._v("上传方案")])])])])},s=[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"upload"},[o("img",{attrs:{src:e("5a11"),alt:""}})])},function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"upload"},[o("img",{attrs:{src:e("0203"),alt:""}})])}],a=e("335a"),r=e("f44b"),x={props:{taskType:{type:String,default:"factory"},lvTitle:{type:String,default:""},lvText:{type:String,default:""}},data:function(){return{}},mounted:function(){r["a"].$on("fileAdded",function(){console.log("文件已选择")}),r["a"].$on("fileSuccess",function(){console.log("文件上传成功")})},methods:{handleLink:function(){var t=this.taskType,n=a["a"].get("token"),e=JSON.parse(a["a"].get("uinfo"));"safe"==t?window.open("http://ml.antiycloud.com?sessionid=".concat(n,"&username=").concat(e.nick)):"factory"===t&&window.open("https://aicompetition.lenovomm.cn/workplace/index/?sessionid=".concat(n,"&username=").concat(e.nick))},upload:function(){console.log(123),r["a"].$emit("openUploader",{id:"1111"})}},destroyed:function(){r["a"].$off("fileAdded"),r["a"].$off("fileSuccess")}},c=x,g=(e("7313"),e("2877")),w=Object(g["a"])(c,l,s,!1,null,null,null),f=w.exports,h={components:{NavBar:d["a"],BottomNavBar:p["a"],StepTwo:f},data:function(){return{step:3,next:!1,taskType:"",contentText:"",contentTitle:""}},activated:function(){var t=this.$route.query.dir;this.taskType=t,console.log(t),"factory"===t?(this.contentText="<p>当前流程制造的生产过程中，构建生产工艺与产品收率之间的关系模型，并准确地预测未来一段时间内的产品收率，对优化工业生产过程与目标，具有重要意义。 由于各方面因素的影响，导致监测到的生产数据可能存在误差。另一方面，流程制造中的生产反应过程是一种高度非线性的系统，传统的数学模型较难拟合各工艺参数与产品之间的关系，致使无法进一步优化工业生产。近年来，部分企业在流程制造领域利用人工智能算法，使产品的收率得到了较大的提升。</p><p>本次比赛模拟实际流程制造生产场景，要求选手通过人工智能算法拟合各种影响因素与生产产品收率之间的关系，并得到工业生产模型，从而实现对未来产品收率的预测。本次比赛是一次人工智能算法在流程制造行业中的有益尝试，对优化工业生产具有重要的价值与意义。<p>",this.contentTitle="流程制造产品收率预测"):"jd"===t?(this.contentText="<p>语音合成是将指定的文本转换成与之对应的语音的过程。在语音导航、信息播报、智能客服等领域有广泛的应用。结合了京东的语音合成，语音识别和语义理解技术，京东智能客服解决方案已经在市政、医疗、零售等行业落地。针对不同的场景，采用不同的音色会让交互更自然，提升用户体验。传统技术中，训练一个新的音色需要较多的数据。本次比赛的题目是基于少量语料的语音合成解决方案。</p>1、初赛期间，主办方会提供一个男声音色，复赛期间，主办方会提供一个女声音色。每个音色500句中文录音。其中400句为训练语料，50句为开发语料，50句为测试语料。主办方提供的数据参赛者只能为用于本次比赛使用。参赛者对数据的使用权到大赛结束为止（2019年10月1日）。参赛者不得将数据用于本次比赛之外的其他目的，不得转让、售卖给他人使用，不得将参赛训练所得模型用于任何商业化应用目的。</p>2、 参赛方训练这两个音色的模型。主办方在初赛截止日期前5天会提供测试文本，参赛方需要提交合成的声音文件。复赛的文本和初赛的文本相同，音色不同。</p>3、 评测标准为主客观结合打分。初赛为客观打分，复赛为主观打分。客观打分的评价标准是Perceptual Evaluation of Speech Quality (PESQ), Signal-to-Noise Ratio (SNR)和Log Spectral Distance (LSD)。主办方会提供客观打分的代码和工具。主观打分是音色相似度和音质MOS打分。</p>",this.contentTitle="京东的语音赛题"):(this.contentText='<p style="text-indent:37px;line-height:40px">\n    <span style="font-family:仿宋_GB2312">随着互联网信息化建设的高速发展，网络安全事件层出不穷，网络安全面临着大的挑战。攻击者为达成攻击目的，通过攻击载荷的投放形成持久化的攻击能力或达成恶意目的。而攻击者为了逃避安全产品的检测，拖延安全分析者的分析时间，达到延长攻击载荷的生存周期的目的。攻击者往往会采用加密混淆的手段对攻击载荷进行处理，本题目以加密混淆的脚本为主要处理对象，通过AI的方法，达到针对脚本的加密混淆精确识别的目的。</span>\n</p>\n<h1 style="line-height:40px">\n    <span style="font-family:仿宋_GB2312">数据集规范：</span>\n</h1>\n<p style="line-height:40px">\n    <span style="font-family:仿宋_GB2312">本题目提供相关的用于机器学习的脚本样本的训练集、验证集及描述文件，训练集文件夹名称A1_XXXX, 验证集文件夹名称 A2_XXXXX，描述文件名称 A1_XXXXX.LOG</span>\n</p>\n<table>\n    <tbody>\n        <tr class="firstRow">\n            <td width="189" valign="top" style="border: 1px solid windowtext; padding: 0px 7px;"></td>\n            <td width="189" valign="top" style="border-top: 1px solid windowtext; border-right: 1px solid windowtext; border-bottom: 1px solid windowtext; border-image: initial; border-left: none; padding: 0px 7px;">\n                <p style="line-height:40px">\n                    <span style="font-family:仿宋_GB2312">描述</span>\n                </p>\n            </td>\n            <td width="189" valign="top" style="border-top: 1px solid windowtext; border-right: 1px solid windowtext; border-bottom: 1px solid windowtext; border-image: initial; border-left: none; padding: 0px 7px;">\n                <p style="line-height:40px">\n                    <span style="font-family:仿宋_GB2312">数量</span>\n                </p>\n            </td>\n        </tr>\n        <tr>\n            <td width="189" valign="top" style="border-right: 1px solid windowtext; border-bottom: 1px solid windowtext; border-left: 1px solid windowtext; border-image: initial; border-top: none; padding: 0px 7px;">\n                <p style="line-height:40px">\n                    <span style="font-family:仿宋_GB2312">A1_XXXX</span>\n                </p>\n            </td>\n            <td width="189" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid windowtext; border-right: 1px solid windowtext; padding: 0px 7px;">\n                <p style="line-height:40px">\n                    <span style="font-family:仿宋_GB2312">训练集所有的样本</span>\n                </p>\n            </td>\n            <td width="189" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid windowtext; border-right: 1px solid windowtext; padding: 0px 7px;">\n                <p style="line-height:40px">\n                    <span style="font-family:仿宋_GB2312">XXXX</span>\n                </p>\n            </td>\n        </tr>\n        <tr>\n            <td width="189" valign="top" style="border-right: 1px solid windowtext; border-bottom: 1px solid windowtext; border-left: 1px solid windowtext; border-image: initial; border-top: none; padding: 0px 7px;">\n                <p style="line-height:40px">\n                    <span style="font-family:仿宋_GB2312">A2_XXXXX</span>\n                </p>\n            </td>\n            <td width="189" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid windowtext; border-right: 1px solid windowtext; padding: 0px 7px;">\n                <p style="line-height:40px">\n                    <span style="font-family:仿宋_GB2312">验证集所有的样本</span>\n                </p>\n            </td>\n            <td width="189" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid windowtext; border-right: 1px solid windowtext; padding: 0px 7px;">\n                <p style="line-height:40px">\n                    <span style="font-family:仿宋_GB2312">XXXX</span>\n                </p>\n            </td>\n        </tr>\n        <tr>\n            <td width="189" valign="top" style="border-right: 1px solid windowtext; border-bottom: 1px solid windowtext; border-left: 1px solid windowtext; border-image: initial; border-top: none; padding: 0px 7px;">\n                <p style="line-height:40px">\n                    <span style="font-family:仿宋_GB2312">A1_XXXXX.LOG</span>\n                </p>\n            </td>\n            <td width="189" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid windowtext; border-right: 1px solid windowtext; padding: 0px 7px;">\n                <p style="line-height:40px">\n                    <span style="font-family:仿宋_GB2312">记录训练集样本对应的标签</span>\n                </p>\n            </td>\n            <td width="189" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid windowtext; border-right: 1px solid windowtext; padding: 0px 7px;">\n                <p style="line-height:40px">\n                    <span style="font-family:仿宋_GB2312">1</span>\n                </p>\n            </td>\n        </tr>\n        <tr>\n            <td width="189" valign="top" style="border-right: 1px solid windowtext; border-bottom: 1px solid windowtext; border-left: 1px solid windowtext; border-image: initial; border-top: none; padding: 0px 7px;"></td>\n            <td width="189" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid windowtext; border-right: 1px solid windowtext; padding: 0px 7px;"></td>\n            <td width="189" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid windowtext; border-right: 1px solid windowtext; padding: 0px 7px;"></td>\n        </tr>\n    </tbody>\n</table>\n<p style="line-height:40px">\n    <strong><span style="font-family: 仿宋_GB2312">描述文件A1_XXXXX.LOG说明</span></strong>\n</p>\n<p style="line-height:40px">\n    <span style="font-family:仿宋_GB2312">日志文件中描述的是训练集样本和标签的对应关系，每行为一条记录，字段之间以\t分隔，例：2908715EEC754ABA1AD21414B23CAFB6\tTRUE, 这条记录的中描述的是</span>\n</p>\n<p style="line-height:40px">\n    <span style="font-family:仿宋_GB2312">样本名：2908715EEC754ABA1AD21414B23CAFB6</span>\n</p>\n<p style="line-height:40px">\n    <span style="font-family:仿宋_GB2312">是否加密混淆：TRUE</span>\n</p>\n<h1 style="line-height:40px">\n    <strong><span style="font-family:仿宋_GB2312">输出规范</span></strong>\n</h1>\n<pre class="brush:html;toolbar:false"><br/></pre>\n<p>\n    <br/>\n</p>',this.contentTitle="机器学习")}},b=h,y=(e("6fc3"),Object(g["a"])(b,o,i,!1,null,null,null));n["default"]=y.exports},"5a11":function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACHElEQVRYR+2XQVLbMBSG/2fKsCw3qFkw4+x8A5ITlBsAN8iGxLvCLqGLhhM03IAbYE5Qd1UzLEhv4K5oMsQ/IzOiqpNmLMkz7aLe2Zb1fXqy3pMEf/kSkx8l7KLEgasTBcV8jqvZRArdR9jn7s4OjtR9/Z169ioQDXgmgg+ucP0dBSf5SKbqfv+U8RvBDQS71XuieCJ69x8l0+0rgaphgC++8Ioh6OUjSU04gR8CvF0nUQnURn9JwbWLzHKJQo2uDl+W6G5tIQYxUSIE0nwsvdcpMAW+jeW3/8JWZB1chzxKeCzEZ9Wn5qxEwEdgE7z27ms+lrjVCNjAf87R1SullQi4wluJgA/cW8AX7iXQFA7i++MCsZkdzZXl9A80hasEpHKAmfk6Q05AHDwRJ+q5tYAPXI28MySrjEmc5xdyZiXgC/cSaAPuJdAZcAbBO7Pg1Cveujmvp3KnKViplkT2uEBvexuhLrdN4M4R6AzYh+ATiSuRl80FCFXTQ1Xrm8LdBYZU5fm9KlRmRXvxWF1qmyqo0xREQxZCPJSCaUB0ITh0gTtFQO0ThbgxR0XiFkCKANN8JDObPYN1BKKEIUpMRZAtiXSxQPqntNpExFqgSac2bf4L/PsRKIH+3Vgubea1aVud0FarYcJQrfOmHbXRjoI9tYR/Hc0SHuuDQxuATX2Yx7f64TQsS8QBUO3Z275KIAsCZGby8joFtSH4DEB8ST+Ew+ZFAAAAAElFTkSuQmCC"},"6fc3":function(t,n,e){"use strict";var o=e("bee7"),i=e.n(o);i.a},7313:function(t,n,e){"use strict";var o=e("d335"),i=e.n(o);i.a},bee7:function(t,n,e){},d335:function(t,n,e){}}]);
//# sourceMappingURL=chunk-2f0f9414.6f3034bf.js.map