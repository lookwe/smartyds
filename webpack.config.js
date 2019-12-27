module.exports = {
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // 将CSS转换为CommonJS
                    'css-loader',
                    // 将Sass编译为CSS
                    'sass-loader',
                ],
            },
        ],
    },
};
