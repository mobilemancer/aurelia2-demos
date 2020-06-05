// @ts-nocheck
require("./setup");
function requireAll(requireContext): void {
  requireContext.keys().map(requireContext);
}
requireAll(require.context("./", true, /spec\.(js|ts)$/));
