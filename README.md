# RAW
React+Antd+Webpack

新建项目文件夹RAW，cmd进入执行：npm init；（需要填写一些基本信息，npm init -yes则直接采用缺省）将生成package.json文件。

npm install babel webpack webpack-dev-server --save-dev //-g
npm install react react-dom --save
npm install babel-loader babel-core babel-preset-react babel-preset-env babel-preset-es2015 --save
npm install react-hot-loader --save-dev
//npm install babel-preset-react-hmre --save-dev  Deprecated

# 兼容IE8
cnpm install es3ify-loader --save

创建名为“.babelrc”，存放babel配置（win7以上系统可通过输入“.babelrc.”得到）。

# 启动
npm install
npm start

