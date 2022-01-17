/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: false,
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(wav)$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/chunks/[path][name].[hash][ext]'
            },
        });
        return config;
    }
};