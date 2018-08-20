"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const range_1 = require("../../utils/range");
const xdoc_parser_1 = require("xdoc-parser");
function createNode(file, node, properties, document) {
    let node_ = Object.assign({}, range_1.default(node), { text: file.text.substring(node.startIndex, node.endIndex) });
    if (properties) {
        node_ = Object.assign(node_, { properties });
    }
    if (document) {
        node_ = Object.assign(node_, { xdoc: xdoc_parser_1.default(node_.text).parse() });
    }
    return node_;
}
exports.createNode = createNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9sYW5nL3R5cGVzY3JpcHQvTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDZDQUFzQztBQUN0Qyw2Q0FBK0I7QUFlL0IsU0FBZ0IsVUFBVSxDQUN4QixJQUFXLEVBQ1gsSUFBZ0IsRUFDaEIsVUFBb0MsRUFDcEMsUUFBa0I7SUFHbEIsSUFBSSxLQUFLLHFCQUFRLGVBQUssQ0FBQyxJQUFJLENBQUMsSUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUUsQ0FBQTtJQUV6RixJQUFJLFVBQVUsRUFBRTtRQUNkLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUE7S0FDN0M7SUFFRCxJQUFJLFFBQVEsRUFBRTtRQUNaLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxxQkFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7S0FDakU7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFqQkQsZ0NBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRleHRSYW5nZSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9UZXh0UmFuZ2VcIjtcclxuaW1wb3J0IHsgU3ludGF4Tm9kZSB9IGZyb20gXCJ0cmVlLXNpdHRlclwiO1xyXG5pbXBvcnQgcmFuZ2UgZnJvbSBcIi4uLy4uL3V0aWxzL3JhbmdlXCI7XHJcbmltcG9ydCB4ZG9jIGZyb20gJ3hkb2MtcGFyc2VyJztcclxuaW1wb3J0IHsgRG9jdW1lbnRhdGlvbk5vZGUgfSBmcm9tICd4ZG9jLXBhcnNlci9zcmMvWERvY0FTVE5vZGUnO1xyXG5pbXBvcnQgeyBSZW1hcmtOb2RlIH0gZnJvbSAneGRvYy1wYXJzZXIvc3JjL1hEb2NQYXJzZXInO1xyXG5pbXBvcnQgSUZpbGUgZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSUZpbGVcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5vZGUgZXh0ZW5kcyBUZXh0UmFuZ2Uge1xyXG4gIHRleHQ6IHN0cmluZyxcclxuICBwcm9wZXJ0aWVzPzogUGFydGlhbDxOb2RlUHJvcGVydGllcz5cclxuICB4ZG9jPzoge1xyXG4gICAgbWFya2Rvd246IFJlbWFya05vZGUsXHJcbiAgICBkb2N1bWVudGF0aW9uOiBQYXJ0aWFsPERvY3VtZW50YXRpb25Ob2RlPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGUoXHJcbiAgZmlsZTogSUZpbGUsIFxyXG4gIG5vZGU6IFN5bnRheE5vZGUsIFxyXG4gIHByb3BlcnRpZXM/OiBQYXJ0aWFsPE5vZGVQcm9wZXJ0aWVzPixcclxuICBkb2N1bWVudD86IGJvb2xlYW4sXHJcbik6IE5vZGUge1xyXG5cclxuICBsZXQgbm9kZV8gPSB7IC4uLnJhbmdlKG5vZGUpLCB0ZXh0OiBmaWxlLnRleHQuc3Vic3RyaW5nKG5vZGUuc3RhcnRJbmRleCwgbm9kZS5lbmRJbmRleCkgfVxyXG5cclxuICBpZiAocHJvcGVydGllcykge1xyXG4gICAgbm9kZV8gPSBPYmplY3QuYXNzaWduKG5vZGVfLCB7IHByb3BlcnRpZXMgfSlcclxuICB9XHJcbiAgXHJcbiAgaWYgKGRvY3VtZW50KSB7XHJcbiAgICBub2RlXyA9IE9iamVjdC5hc3NpZ24obm9kZV8sIHsgeGRvYzogeGRvYyhub2RlXy50ZXh0KS5wYXJzZSgpIH0pXHJcbiAgfVxyXG4gIHJldHVybiBub2RlXztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOb2RlUHJvcGVydGllcyB7XHJcbiAgZXhwb3J0czogUGFydGlhbDxOb2RlRXhwb3J0cz5cclxuICBpbmhlcml0YW5jZTogUGFydGlhbDxOb2RlSW5oZXJpdGFuY2U+XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTm9kZUV4cG9ydHMge1xyXG4gIGV4cG9ydDogYm9vbGVhbixcclxuICBkZWZhdWx0OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTm9kZUluaGVyaXRhbmNlIHtcclxuICBleHRlbmRzOiBib29sZWFuLFxyXG4gIGltcGxlbWVudHM6IGJvb2xlYW5cclxufSJdfQ==