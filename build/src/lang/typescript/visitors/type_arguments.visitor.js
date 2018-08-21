"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_visitor_1 = require("./type.visitor");
function visitTypeArguments(source, node) {
    return node.children
        .filter(child => !child.type.match(/[<>,]/))
        .map(child => type_visitor_1.visitType(source, child));
}
exports.visitTypeArguments = visitTypeArguments;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZV9hcmd1bWVudHMudmlzaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9sYW5nL3R5cGVzY3JpcHQvdmlzaXRvcnMvdHlwZV9hcmd1bWVudHMudmlzaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlEQUEyQztBQUczQyxTQUFnQixrQkFBa0IsQ0FBQyxNQUFjLEVBQUUsSUFBZ0I7SUFDL0QsT0FBTyxJQUFJLENBQUMsUUFBUTtTQUNuQixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLHdCQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUE7QUFDM0MsQ0FBQztBQUpELGdEQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ludGF4Tm9kZSB9IGZyb20gXCJ0cmVlLXNpdHRlclwiO1xuaW1wb3J0IHsgdmlzaXRUeXBlIH0gZnJvbSBcIi4vdHlwZS52aXNpdG9yXCI7XG5pbXBvcnQgU291cmNlIGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL1NvdXJjZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdmlzaXRUeXBlQXJndW1lbnRzKHNvdXJjZTogU291cmNlLCBub2RlOiBTeW50YXhOb2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuY2hpbGRyZW5cbiAgICAuZmlsdGVyKGNoaWxkID0+ICFjaGlsZC50eXBlLm1hdGNoKC9bPD4sXS8pKVxuICAgIC5tYXAoY2hpbGQgPT4gdmlzaXRUeXBlKHNvdXJjZSwgY2hpbGQpKVxufSJdfQ==