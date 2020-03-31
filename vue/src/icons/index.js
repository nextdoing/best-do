// 获取所有的svg文件
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context("./svg", false, /\.svg$/);
const iconMap = requireAll(req);

export default {
  iconMap
};
