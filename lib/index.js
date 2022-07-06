exports = module.exports = function () {
    return function PostHTMLAstro(tree, cb) {
        tree.match({tag: 'script'}, (node) => {
            if (node.content) {
                node.content = `
                    // <![CDATA[
                    ${node.content}
                    // ]]>`;
            }

            return node;
        })

        cb(null, tree);
    }
}