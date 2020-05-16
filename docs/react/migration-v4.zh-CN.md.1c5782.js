(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{3241:function(n,e){n.exports={content:["article",["p","本文档将帮助你从 antd ",["code","3.x"]," 版本升级到 antd ",["code","4.x"]," 版本，如果你是 ",["code","2.x"]," 或者更老的版本，请先参考之前的",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/2adf8ced24da7b3cb46a3475854a83d76a98c536/CHANGELOG.zh-CN.md#300"},"升级文档"],"升级到 3.x。"],["h2","升级准备"],["ol",["li",["p","请先升级到 3.x 的最新版本，按照控制台 warning 信息移除/修改相关的 API。"]],["li",["p","升级项目 React 16.12.0 以上。"],["ul",["li",["p","如果你仍在使用 React 15，请参考 ",["a",{title:null,href:"https://reactjs.org/blog/2017/09/26/react-v16.0.html#breaking-changes"},"React 16 升级文档"],"。"]],["li",["p","其余 React 16 废弃生命周期 API 请参考 ",["a",{title:null,href:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"},"迁移导引"],"。"]]]]],["h2","4.0 有哪些不兼容的变化"],["h3","设计规范调整"],["ul",["li",["p","行高从 ",["code","1.5"],"(",["code","21px"],") 调整为 ",["code","1.5715"],"(",["code","22px"],")。"]],["li",["p","基础圆角调整，由",["code","4px"]," 改为 ",["code","2px"],"。"]],["li",["p","Selected 颜色和 Hovered 颜色进行了交换。"]],["li",["p","全局阴影优化，调整为三层阴影区分控件层次关系。"]],["li",["p","气泡确认框中图标的使用改变，由问号改为感叹号。"]],["li",["p","部分组件选中颜色统一改为 ",["code","@blue-1: #E6F7FF"],"，对应 ",["code","hover"]," 颜色改为 ",["code","@gray-2: #FAFAFA"],"。"]],["li",["p","报错色色值调整，由 ",["code","@red-5: #F5222D"]," 改为 ",["code","@red-5: #FF4D4F"],"。"]],["li",["p","分割线颜色明度降低，由 ",["code","#E8E8E8"]," 改为 ",["code","#F0F0F0"],"。"]],["li",["p","DatePicker 交互重做，面板和输入框分离，范围选择现可单独选择开始和结束时间。"]],["li",["p","Table 默认背景颜色从透明修改为白色。"]],["li",["p","Tabs 火柴棍样式缩短为和文字等长。"]]],["h3","兼容性调整"],["ul",["li",["p","IE 最低支持版本为 IE 11。"]],["li",["p","React 最低支持版本为 React 16.9，部分组件开始使用 hooks 进行重构。"],["ul",["li",["p","重构通过 ",["code","useMemo"]," 进行性能优化，请勿使用 mutable data 作为参数。"]]]]],["h4","移除废弃的 API"],["ul",["li",["p","移除了 LocaleProvider，请使用 ",["code","ConfigProvider"]," 替代。"]],["li",["p","移除了 Mention，请使用 ",["code","Mentions"]," 替代。"]],["li",["p","移除了 Alert 的 ",["code","iconType"]," 属性，请使用 ",["code","icon"]," 替代。"]],["li",["p","移除了 Modal.xxx 的 ",["code","iconType"]," 属性，请使用 ",["code","icon"]," 替代。"]],["li",["p","移除了 Form.create 方法，",["code","form"]," 现可由 ",["code","Form.useForm"]," 获取。"]],["li",["p","移除了 Form.Item 的 ",["code","id"]," 属性，请使用 ",["code","htmlFor"]," 替代。"]],["li",["p","移除了 Typography 的 ",["code","setContentRef"]," 属性，请使用 ",["code","ref"]," 替代。"]],["li",["p","移除了 TimePicker 的 ",["code","allowEmpty"]," 属性，请使用 ",["code","allowClear"]," 替代。"]],["li",["p","移除了 Tag 的 ",["code","afterClose"]," 属性，请使用 ",["code","onClose"]," 替代。"]],["li",["p","移除了 Card 的 ",["code","noHovering"]," 属性，请使用 ",["code","hoverable"]," 替代。"]],["li",["p","移除了 Carousel 的 ",["code","vertical"]," 属性，请使用 ",["code","dotPosition"]," 替代。"]],["li",["p","移除了 Drawer 的 ",["code","wrapClassName"]," 属性，请使用 ",["code","className"]," 替代。"]],["li",["p","移除了 TextArea 的 ",["code","autosize"]," 属性，请使用 ",["code","autoSize"]," 替代。"]],["li",["p","移除了 Affix 的 ",["code","offset"]," 属性，请使用 ",["code","offsetTop"]," 替代。"]],["li",["p","移除了 Transfer 的 ",["code","onSearchChange"]," 属性，请使用 ",["code","onSearch"]," 替代。"]],["li",["p","移除了 Transfer 的 ",["code","body"]," 属性，请使用 ",["code","children"]," 替代。"]],["li",["p","移除了 Transfer 的 ",["code","lazy"]," 属性，它并没有起到真正的优化效果。"]],["li",["p","移除了 Select 的 ",["code","combobox"]," 模式，请使用 ",["code","AutoComplete"]," 替代。"]]],["h4","图标升级"],["p","在 ",["code","antd@3.9.0"]," 中，我们引入了 svg 图标（",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/10353"},"为何使用 svg 图标？"],"）。使用了字符串命名的图标 API 无法做到按需加载，因而全量引入了 svg 图标文件，这大大增加了打包产物的尺寸。在 4.0 中，我们调整了图标的使用 API 从而支持 tree shaking，减少 antd 默认包体积约 150 KB(Gzipped)。"],["p","旧版 Icon 使用方式将被废弃："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Icon<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>smile<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>smile<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code",'import { Icon, Button } from \'antd\';\n\nconst Demo = () => (\n  <div>\n    <Icon type="smile" />\n    <Button icon="smile" />\n  </div>\n);']],["p","4.0 中会采用按需引入的方式："],["pre",{lang:"diff",highlighted:'  import { Button } from \'antd\';\n\n  // tree-shaking supported\n<span class="token deleted">- import { Icon } from \'antd\';</span>\n<span class="token inserted">+ import { SmileOutlined } from \'@ant-design/icons\';</span>\n\n  const Demo = () => (\n    &lt;div>\n<span class="token deleted">-     &lt;Icon type="smile" /></span>\n<span class="token inserted">+     &lt;SmileOutlined /></span>\n      &lt;Button icon={&lt;SmileOutlined />} />\n    &lt;/div>\n  );\n\n  // or directly import\n  import SmileOutlined from \'@ant-design/icons/SmileOutlined\';'},["code","  import { Button } from 'antd';\n\n  // tree-shaking supported\n- import { Icon } from 'antd';\n+ import { SmileOutlined } from '@ant-design/icons';\n\n  const Demo = () => (\n    <div>\n-     <Icon type=\"smile\" />\n+     <SmileOutlined />\n      <Button icon={<SmileOutlined />} />\n    </div>\n  );\n\n  // or directly import\n  import SmileOutlined from '@ant-design/icons/SmileOutlined';"]],["p","你将仍然可以通过兼容包继续使用："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/compatible\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>smile<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>smile<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { Button } from 'antd';\nimport { Icon } from '@ant-design/compatible';\n\nconst Demo = () => (\n  <div>\n    <Icon type=\"smile\" />\n    <Button icon=\"smile\" />\n  </div>\n);"]],["h4","组件重构"],["ul",["li",["p","Form 重写"],["ul",["li",["p","不再需要 ",["code","Form.create"],"。"]],["li",["p","嵌套字段支持从 ",["code","'xxx.yyy'"]," 改成 ",["code","['xxx', 'yyy']"],"。"]],["li",["p","迁移文档请查看",["a",{title:null,href:"/components/form/v3"},"此处"],"。"]]]],["li",["p","DatePicker 重写"],["ul",["li",["p","提供 ",["code","picker"]," 属性用于选择器切换。"]],["li",["p","范围选择现在可以单独选择开始和结束时间。"]],["li",["p",["code","onPanelChange"]," 在面板值变化时也会触发。"]],["li",["p",["a",{title:null,href:"/components/date-picker-cn/#components-date-picker-demo-date-render"},"自定义单元格样式"],"的类名从 ",["code","ant-calendar-date"]," 改为 ",["code","ant-picker-cell-inner"],"。"]]]],["li",["p","Tree、Select、TreeSelect、AutoComplete 重新写"],["ul",["li",["p","使用虚拟滚动。"]],["li",["p",["code","onBlur"]," 时不再修改选中值，且返回 React 原生的 ",["code","event"]," 对象。"]],["li",["p","AutoComplete 不再支持 ",["code","optionLabelProp"],"，请直接设置 Option ",["code","value"]," 属性。"]],["li",["p","Select 移除 ",["code","dropdownMenuStyle"]," 属性。"]],["li",["p","如果你需要设置弹窗高度请使用 ",["code","listHeight"]," 来代替 ",["code","dropdownStyle"]," 的高度样式。"]],["li",["p",["code","filterOption"]," 第二个参数直接返回原数据，不在需要通过 ",["code","option.props.children"]," 来进行匹配。"]]]],["li",["p","Grid 组件使用 flex 布局。"]],["li",["p","Button 的 ",["code","danger"]," 现在作为一个属性而不是按钮类型。"]],["li",["p","Input、Select 的 ",["code","value"]," 为 ",["code","undefined"]," 时改为非受控状态。"]],["li",["p","Table 重写"],["ul",["li",["p","在没有 ",["code","columns"]," 时仍然会保留一列。"]],["li",["p","嵌套 ",["code","dataIndex"]," 支持从 ",["code","'xxx.yyy'"]," 改成 ",["code","['xxx', 'yyy']"],"。"]]]],["li",["p","Pagination 自 ",["code","4.1.0"]," 起大于 50 条数据默认会展示 ",["code","pageSize"]," 切换器，这条规则同样会运用于 Table 上。"]]],["pre",{lang:"diff",highlighted:"<span class=\"token deleted\">&lt;Table</span>\n  columns={[\n    {\n      title: 'Age',\n<span class=\"token deleted\">-     dataIndex: 'user.age',</span>\n<span class=\"token inserted\">+     dataIndex: ['user', 'age'],</span>\n    },\n  ]}\n/>"},["code","<Table\n  columns={[\n    {\n      title: 'Age',\n-     dataIndex: 'user.age',\n+     dataIndex: ['user', 'age'],\n    },\n  ]}\n/>"]],["h2","开始升级"],["p","你可以手动对照上面的列表逐条检查代码进行修改，另外，我们也提供了一个 codemod cli 工具 ",["a",{title:null,href:"https://github.com/ant-design/codemod-v4"},"@ant-design/codemod-v4"]," 以帮助你快速升级到 v4 版本。"],["p","在运行 codemod cli 前，请先提交你的本地代码修改。"],["pre",{lang:"shell",highlighted:'# 通过 npx 直接运行\nnpx <span class="token operator">-</span>p <span class="token variable">@ant</span><span class="token operator">-</span>design<span class="token operator">/</span>codemod<span class="token operator">-</span>v4 antd4<span class="token operator">-</span>codemod src\n\n# 或者全局安装\n# 使用 npm\nnpm i <span class="token operator">-</span>g <span class="token variable">@ant</span><span class="token operator">-</span>design<span class="token operator">/</span>codemod<span class="token operator">-</span>v4\n# 或者使用 yarn\nyarn <span class="token keyword">global</span> add <span class="token variable">@ant</span><span class="token operator">-</span>design<span class="token operator">/</span>codemod<span class="token operator">-</span>v4\n\n# 运行\nantd4<span class="token operator">-</span>codemod src'},["code","# 通过 npx 直接运行\nnpx -p @ant-design/codemod-v4 antd4-codemod src\n\n# 或者全局安装\n# 使用 npm\nnpm i -g @ant-design/codemod-v4\n# 或者使用 yarn\nyarn global add @ant-design/codemod-v4\n\n# 运行\nantd4-codemod src"]],["p",["img",{src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*QdcbQoLC-cQAAAAAAAAAAABkARQnAQ",alt:"codemod running",width:"720"}]],["p","对于无法自动修改的部分，codemod 会在命令行进行提示，建议按提示手动修改。修改后可以反复运行上述命令进行检查。"],["p",["img",{src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*KQwWSrPirlUAAAAAAAAAAABkARQnAQ",alt:"contains an invalid icon",width:"720"}]],["blockquote",["p","注意 codemod 不能涵盖所有场景，建议还是要按不兼容的变化逐条排查。"]],["h3","迁移工具修改详情"],["p",["code","@ant-design/codemod-v4"]," 会帮你迁移到 antd v4, 废弃的组件则通过 ",["code","@ant-design/compatible"]," 保持运行, 一般来说你无需手动迁移。下方内容详细介绍了整体的迁移和变化，你也可以参照变动手动修改。"],["h4","将已废弃的 ",["code","Form"]," 和 ",["code","Mention"]," 组件通过 ",["code","@ant-design/compatible"]," 包引入"],["pre",{lang:"diff",highlighted:"<span class=\"token deleted\">- import { Form, Input, Button, Mention } from 'antd';</span>\n<span class=\"token inserted\">+ import { Form, Mention } from '@ant-design/compatible';</span>\n<span class=\"token inserted\">+ import '@ant-design/compatible/assets/index.css';</span>\n<span class=\"token inserted\">+ import { Input, Button } from 'antd';</span>\n\n  ReactDOM.render( (\n    &lt;div>\n      &lt;Form>\n        {getFieldDecorator('username')(&lt;Input />)}\n        &lt;Button>Submit&lt;/Button>\n      &lt;/Form>\n      &lt;Mention\n        style={{ width: '100%' }}\n        onChange={onChange}\n        defaultValue={toContentState('@afc163')}\n        defaultSuggestions={['afc163', 'benjycui']}\n        onSelect={onSelect}\n      />\n    &lt;/div>\n  );"},["code","- import { Form, Input, Button, Mention } from 'antd';\n+ import { Form, Mention } from '@ant-design/compatible';\n+ import '@ant-design/compatible/assets/index.css';\n+ import { Input, Button } from 'antd';\n\n  ReactDOM.render( (\n    <div>\n      <Form>\n        {getFieldDecorator('username')(<Input />)}\n        <Button>Submit</Button>\n      </Form>\n      <Mention\n        style={{ width: '100%' }}\n        onChange={onChange}\n        defaultValue={toContentState('@afc163')}\n        defaultSuggestions={['afc163', 'benjycui']}\n        onSelect={onSelect}\n      />\n    </div>\n  );"]],["blockquote",["p",["strong","注意："],"从 ",["code","@ant-design/compatible"]," 引入的老版本 Form 组件，样式类名会从 ",["code",".ant-form"]," 变成 ",["code",".ant-legacy-form"],"，如果你对其进行了样式覆盖，也需要相应修改。"]],["h4","用新的 ",["code","@ant-design/icons"]," 替换字符串类型的 ",["code","icon"]," 属性值"],["pre",{lang:"diff",highlighted:'  import { Avatar, Button, Result } from \'antd\';\n<span class="token inserted">+ import { QuestionOutlined, UserOutlined } from \'@ant-design/icons\';</span>\n\n  ReactDOM.render(\n    &lt;div>\n<span class="token deleted">-     &lt;Button type="primary" shape="circle" icon="search" /></span>\n<span class="token inserted">+     &lt;Button type="primary" shape="circle" icon={SearchOutlined} /></span>\n<span class="token deleted">-     &lt;Avatar shape="square" icon="user" /></span>\n<span class="token inserted">+     &lt;Avatar shape="square" icon={UserOutlined} /></span>\n      &lt;Result\n<span class="token deleted">-       icon="question"</span>\n<span class="token inserted">+       icon={&lt;QuestionOutlined />}</span>\n        title="Great, we have done all the operations!"\n        extra={&lt;Button type="primary">Next&lt;/Button>}\n      />\n    &lt;/div>,\n    mountNode,\n  );'},["code",'  import { Avatar, Button, Result } from \'antd\';\n+ import { QuestionOutlined, UserOutlined } from \'@ant-design/icons\';\n\n  ReactDOM.render(\n    <div>\n-     <Button type="primary" shape="circle" icon="search" />\n+     <Button type="primary" shape="circle" icon={SearchOutlined} />\n-     <Avatar shape="square" icon="user" />\n+     <Avatar shape="square" icon={UserOutlined} />\n      <Result\n-       icon="question"\n+       icon={<QuestionOutlined />}\n        title="Great, we have done all the operations!"\n        extra={<Button type="primary">Next</Button>}\n      />\n    </div>,\n    mountNode,\n  );']],["h4","将 v3 Icon 组件转换成 ",["code","@ant-design/icons"]," 中引入"],["pre",{lang:"diff",highlighted:'<span class="token deleted">- import { Icon, Input } from \'antd\';</span>\n<span class="token inserted">+ import { Input } from \'antd\';</span>\n<span class="token inserted">+ import Icon, { CodeFilled, SmileOutlined, SmileTwoTone } from \'@ant-design/icons\';</span>\n\n  const HeartSvg = () => (\n    &lt;svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">\n      &lt;path d="M923 plapla..." />\n    &lt;/svg>\n  );\n\n  const HeartIcon = props => &lt;Icon component={HeartSvg} {...props} />;\n\n  ReactDOM.render(\n    &lt;div>\n<span class="token deleted">-     &lt;Icon type="code" theme="filled" /></span>\n<span class="token inserted">+     &lt;CodeFilled /></span>\n<span class="token deleted">-     &lt;Icon type="smile" theme="twoTone" twoToneColor="#eb2f96" /></span>\n<span class="token inserted">+     &lt;SmileTwoTone twoToneColor="#eb2f96" /></span>\n<span class="token deleted">-     &lt;Icon type="code" theme={props.fill ? \'filled\' : \'outlined\'} /></span>\n<span class="token inserted">+     &lt;LegacyIcon type="code" theme={props.fill ? \'filled\' : \'outlined\'} /></span>\n      &lt;HeartIcon />\n      &lt;Icon viewBox="0 0 24 24">\n        &lt;title>Cool Home&lt;/title>\n        &lt;path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />\n      &lt;/Icon>\n      &lt;Input suffix={&lt;SmileOutlined />} />\n    &lt;/div>,\n    mountNode,\n  );'},["code",'- import { Icon, Input } from \'antd\';\n+ import { Input } from \'antd\';\n+ import Icon, { CodeFilled, SmileOutlined, SmileTwoTone } from \'@ant-design/icons\';\n\n  const HeartSvg = () => (\n    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">\n      <path d="M923 plapla..." />\n    </svg>\n  );\n\n  const HeartIcon = props => <Icon component={HeartSvg} {...props} />;\n\n  ReactDOM.render(\n    <div>\n-     <Icon type="code" theme="filled" />\n+     <CodeFilled />\n-     <Icon type="smile" theme="twoTone" twoToneColor="#eb2f96" />\n+     <SmileTwoTone twoToneColor="#eb2f96" />\n-     <Icon type="code" theme={props.fill ? \'filled\' : \'outlined\'} />\n+     <LegacyIcon type="code" theme={props.fill ? \'filled\' : \'outlined\'} />\n      <HeartIcon />\n      <Icon viewBox="0 0 24 24">\n        <title>Cool Home</title>\n        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />\n      </Icon>\n      <Input suffix={<SmileOutlined />} />\n    </div>,\n    mountNode,\n  );']],["h4","将 v3 LocaleProvider 组件转换成 v4 ConfigProvider 组件"],["pre",{lang:"diff",highlighted:'<span class="token deleted">- import { LocaleProvider } from \'antd\';</span>\n<span class="token inserted">+ import { ConfigProvider } from \'antd\';</span>\n\n  ReactDOM.render(\n<span class="token deleted">-   &lt;LocaleProvider {...yourConfig}></span>\n<span class="token inserted">+   &lt;ConfigProvider {...yourConfig}></span>\n      &lt;Main />\n<span class="token deleted">-   &lt;/LocaleProvider></span>\n<span class="token inserted">+   &lt;/ConfigProvider></span>\n    mountNode,\n  );'},["code","- import { LocaleProvider } from 'antd';\n+ import { ConfigProvider } from 'antd';\n\n  ReactDOM.render(\n-   <LocaleProvider {...yourConfig}>\n+   <ConfigProvider {...yourConfig}>\n      <Main />\n-   </LocaleProvider>\n+   </ConfigProvider>\n    mountNode,\n  );"]],["h4","将 ",["code","Modal.method()"]," 中字符串 icon 属性的调用转换成从 ",["code","@ant-design/icons"]," 中引入"],["pre",{lang:"diff",highlighted:"  import { Modal } from 'antd';\n<span class=\"token inserted\">+ import { AntDesignOutlined } from '@ant-design/icons';</span>\n\n  Modal.confirm({\n<span class=\"token deleted\">-  icon: 'ant-design',</span>\n<span class=\"token inserted\">+  icon: &lt;AntDesignOutlined />,</span>\n   title: 'Do you Want to delete these items?',\n   content: 'Some descriptions',\n   onOk() {\n     console.log('OK');\n   },\n   onCancel() {\n     console.log('Cancel');\n   },\n });"},["code","  import { Modal } from 'antd';\n+ import { AntDesignOutlined } from '@ant-design/icons';\n\n  Modal.confirm({\n-  icon: 'ant-design',\n+  icon: <AntDesignOutlined />,\n   title: 'Do you Want to delete these items?',\n   content: 'Some descriptions',\n   onOk() {\n     console.log('OK');\n   },\n   onCancel() {\n     console.log('Cancel');\n   },\n });"]],["h2","遇到问题"],["p","v4 做了非常多的细节改进和重构，我们尽可能收集了已知的所有不兼容变化和相关影响，但是有可能还是有一些场景我们没有考虑到。如果你在升级过程中遇到了问题，请到 ",["a",{title:null,href:"http://new-issue.ant.design/"},"GitHub issues"]," 和 ",["a",{title:null,href:"https://github.com/ant-design/codemod-v4/issues"},"codemod Issues"]," 进行反馈。我们会尽快响应和相应改进这篇文档。"]],meta:{order:8,title:"从 v3 到 v4",filename:"docs/react/migration-v4.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#升级准备",title:"升级准备"},"升级准备"]],["li",["a",{className:"bisheng-toc-h2",href:"#4.0-有哪些不兼容的变化",title:"4.0 有哪些不兼容的变化"},"4.0 有哪些不兼容的变化"]],["li",["a",{className:"bisheng-toc-h2",href:"#开始升级",title:"开始升级"},"开始升级"]],["li",["a",{className:"bisheng-toc-h2",href:"#遇到问题",title:"遇到问题"},"遇到问题"]]]}}}]);