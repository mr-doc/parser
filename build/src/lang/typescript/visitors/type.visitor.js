"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Node");
const type_arguments_visitor_1 = require("./type_arguments.visitor");
const log_1 = require("../../../utils/log");
function visitTypeOrTypeIdentifier(source, node) {
    if (node.type === 'type_identifier') {
        return visitTypeIdentifier(source, node);
    }
    return visitType(source, node);
}
exports.visitTypeOrTypeIdentifier = visitTypeOrTypeIdentifier;
function visitType(source, node) {
    switch (node.type) {
        case 'union_type':
            return visitUnionType(source, node);
        case 'intersection_type':
            return visitIntersectionType(source, node);
        case 'parenthesized_type':
            return visitParenthesizedType(source, node);
        case 'type_identifier':
            return visitTypeIdentifier(source, node);
        case 'generic_type':
            return visitGenericType(source, node);
        case 'predefined_type':
            return visitPredefinedType(source, node);
        default:
            log_1.default.report(source, node, log_1.ErrorType.NodeTypeNotYetSupported);
            break;
    }
}
exports.visitType = visitType;
function visitTypeIdentifier(source, node) {
    return {
        type: node.type,
        context: Node_1.createNode(source, node)
    };
}
exports.visitTypeIdentifier = visitTypeIdentifier;
function visitUnionType(source, node) {
    const union = node.children;
    return {
        type: node.type,
        context: Node_1.createNode(source, node),
        left: visitTypeOrTypeIdentifier(source, union[0]),
        right: visitTypeOrTypeIdentifier(source, union[2])
    };
}
exports.visitUnionType = visitUnionType;
function visitIntersectionType(source, node) {
    const intersect = node.children;
    return {
        type: node.type,
        context: Node_1.createNode(source, node),
        left: visitTypeOrTypeIdentifier(source, intersect[0]),
        right: visitTypeOrTypeIdentifier(source, intersect[2])
    };
}
exports.visitIntersectionType = visitIntersectionType;
function visitParenthesizedType(source, node) {
    return {
        type: node.type,
        context: Node_1.createNode(source, node),
        parenthesized: visitTypeOrTypeIdentifier(source, node.children[1])
    };
}
exports.visitParenthesizedType = visitParenthesizedType;
function visitGenericType(source, node) {
    let children = node.children;
    return {
        type: node.type,
        context: Node_1.createNode(source, node),
        generic: visitTypeIdentifier(source, children.shift()),
        type_arguments: type_arguments_visitor_1.visitTypeArguments(source, children.shift())
    };
}
exports.visitGenericType = visitGenericType;
function visitPredefinedType(source, node) {
    return {
        type: node.type,
        context: Node_1.createNode(source, node.children.shift()),
    };
}
exports.visitPredefinedType = visitPredefinedType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS52aXNpdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xhbmcvdHlwZXNjcmlwdC92aXNpdG9ycy90eXBlLnZpc2l0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQ0FBcUM7QUFFckMscUVBQThEO0FBRTlELDRDQUFvRDtBQUVwRCxTQUFnQix5QkFBeUIsQ0FBQyxNQUFjLEVBQUUsSUFBZ0I7SUFDeEUsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGlCQUFpQixFQUFFO1FBQ25DLE9BQU8sbUJBQW1CLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO0tBQ3pDO0lBQ0QsT0FBTyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFMRCw4REFLQztBQUVELFNBQWdCLFNBQVMsQ0FBQyxNQUFjLEVBQUUsSUFBZ0I7SUFDeEQsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ2pCLEtBQUssWUFBWTtZQUNmLE9BQU8sY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0QyxLQUFLLG1CQUFtQjtZQUN0QixPQUFPLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxLQUFLLG9CQUFvQjtZQUN2QixPQUFPLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxLQUFLLGlCQUFpQjtZQUNwQixPQUFPLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxLQUFLLGNBQWM7WUFDakIsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEMsS0FBSyxpQkFBaUI7WUFDcEIsT0FBTyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0M7WUFDQSxhQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsZUFBUyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDNUQsTUFBTTtLQUNQO0FBQ0gsQ0FBQztBQWxCRCw4QkFrQkM7QUFFRCxTQUFnQixtQkFBbUIsQ0FBQyxNQUFjLEVBQUUsSUFBZ0I7SUFDbEUsT0FBTztRQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLE9BQU8sRUFBRSxpQkFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7S0FDbEMsQ0FBQTtBQUNILENBQUM7QUFMRCxrREFLQztBQUVELFNBQWdCLGNBQWMsQ0FBQyxNQUFjLEVBQUUsSUFBZ0I7SUFDN0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUM1QixPQUFPO1FBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1FBQ2YsT0FBTyxFQUFFLGlCQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztRQUNqQyxJQUFJLEVBQUUseUJBQXlCLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxLQUFLLEVBQUUseUJBQXlCLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuRCxDQUFBO0FBQ0gsQ0FBQztBQVJELHdDQVFDO0FBRUQsU0FBZ0IscUJBQXFCLENBQUMsTUFBYyxFQUFFLElBQWdCO0lBQ3BFLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDaEMsT0FBTztRQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLE9BQU8sRUFBRSxpQkFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7UUFDakMsSUFBSSxFQUFFLHlCQUF5QixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsS0FBSyxFQUFFLHlCQUF5QixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdkQsQ0FBQTtBQUNILENBQUM7QUFSRCxzREFRQztBQUVELFNBQWdCLHNCQUFzQixDQUFDLE1BQWMsRUFBRSxJQUFnQjtJQUNyRSxPQUFPO1FBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1FBQ2YsT0FBTyxFQUFFLGlCQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztRQUNqQyxhQUFhLEVBQUUseUJBQXlCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkUsQ0FBQTtBQUNILENBQUM7QUFORCx3REFNQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLE1BQWMsRUFBRSxJQUFnQjtJQUMvRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzdCLE9BQU87UUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDZixPQUFPLEVBQUUsaUJBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO1FBQ2pDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RELGNBQWMsRUFBRSwyQ0FBa0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQzdELENBQUE7QUFDSCxDQUFDO0FBUkQsNENBUUM7QUFFRCxTQUFnQixtQkFBbUIsQ0FBQyxNQUFjLEVBQUUsSUFBZ0I7SUFDbEUsT0FBTztRQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLE9BQU8sRUFBRSxpQkFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ25ELENBQUE7QUFDSCxDQUFDO0FBTEQsa0RBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4uL05vZGVcIjtcbmltcG9ydCB7IFN5bnRheE5vZGUgfSBmcm9tIFwidHJlZS1zaXR0ZXJcIjtcbmltcG9ydCB7IHZpc2l0VHlwZUFyZ3VtZW50cyB9IGZyb20gXCIuL3R5cGVfYXJndW1lbnRzLnZpc2l0b3JcIjtcbmltcG9ydCBTb3VyY2UgZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvU291cmNlXCI7XG5pbXBvcnQgbG9nLCB7IEVycm9yVHlwZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9sb2dcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHZpc2l0VHlwZU9yVHlwZUlkZW50aWZpZXIoc291cmNlOiBTb3VyY2UsIG5vZGU6IFN5bnRheE5vZGUpIHtcbiAgaWYgKG5vZGUudHlwZSA9PT0gJ3R5cGVfaWRlbnRpZmllcicpIHtcbiAgICByZXR1cm4gdmlzaXRUeXBlSWRlbnRpZmllcihzb3VyY2UsIG5vZGUpXG4gIH1cbiAgcmV0dXJuIHZpc2l0VHlwZShzb3VyY2UsIG5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmlzaXRUeXBlKHNvdXJjZTogU291cmNlLCBub2RlOiBTeW50YXhOb2RlKSB7XG4gIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgY2FzZSAndW5pb25fdHlwZSc6XG4gICAgICByZXR1cm4gdmlzaXRVbmlvblR5cGUoc291cmNlLCBub2RlKTtcbiAgICBjYXNlICdpbnRlcnNlY3Rpb25fdHlwZSc6XG4gICAgICByZXR1cm4gdmlzaXRJbnRlcnNlY3Rpb25UeXBlKHNvdXJjZSwgbm9kZSk7XG4gICAgY2FzZSAncGFyZW50aGVzaXplZF90eXBlJzpcbiAgICAgIHJldHVybiB2aXNpdFBhcmVudGhlc2l6ZWRUeXBlKHNvdXJjZSwgbm9kZSk7XG4gICAgY2FzZSAndHlwZV9pZGVudGlmaWVyJzpcbiAgICAgIHJldHVybiB2aXNpdFR5cGVJZGVudGlmaWVyKHNvdXJjZSwgbm9kZSk7XG4gICAgY2FzZSAnZ2VuZXJpY190eXBlJzpcbiAgICAgIHJldHVybiB2aXNpdEdlbmVyaWNUeXBlKHNvdXJjZSwgbm9kZSk7XG4gICAgY2FzZSAncHJlZGVmaW5lZF90eXBlJzpcbiAgICAgIHJldHVybiB2aXNpdFByZWRlZmluZWRUeXBlKHNvdXJjZSwgbm9kZSk7XG4gICAgZGVmYXVsdDpcbiAgICBsb2cucmVwb3J0KHNvdXJjZSwgbm9kZSwgRXJyb3JUeXBlLk5vZGVUeXBlTm90WWV0U3VwcG9ydGVkKTtcbiAgICBicmVhaztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmlzaXRUeXBlSWRlbnRpZmllcihzb3VyY2U6IFNvdXJjZSwgbm9kZTogU3ludGF4Tm9kZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IG5vZGUudHlwZSxcbiAgICBjb250ZXh0OiBjcmVhdGVOb2RlKHNvdXJjZSwgbm9kZSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmlzaXRVbmlvblR5cGUoc291cmNlOiBTb3VyY2UsIG5vZGU6IFN5bnRheE5vZGUpIHtcbiAgY29uc3QgdW5pb24gPSBub2RlLmNoaWxkcmVuO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IG5vZGUudHlwZSxcbiAgICBjb250ZXh0OiBjcmVhdGVOb2RlKHNvdXJjZSwgbm9kZSksXG4gICAgbGVmdDogdmlzaXRUeXBlT3JUeXBlSWRlbnRpZmllcihzb3VyY2UsIHVuaW9uWzBdKSxcbiAgICByaWdodDogdmlzaXRUeXBlT3JUeXBlSWRlbnRpZmllcihzb3VyY2UsIHVuaW9uWzJdKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdEludGVyc2VjdGlvblR5cGUoc291cmNlOiBTb3VyY2UsIG5vZGU6IFN5bnRheE5vZGUpIHtcbiAgY29uc3QgaW50ZXJzZWN0ID0gbm9kZS5jaGlsZHJlbjtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBub2RlLnR5cGUsXG4gICAgY29udGV4dDogY3JlYXRlTm9kZShzb3VyY2UsIG5vZGUpLFxuICAgIGxlZnQ6IHZpc2l0VHlwZU9yVHlwZUlkZW50aWZpZXIoc291cmNlLCBpbnRlcnNlY3RbMF0pLFxuICAgIHJpZ2h0OiB2aXNpdFR5cGVPclR5cGVJZGVudGlmaWVyKHNvdXJjZSwgaW50ZXJzZWN0WzJdKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdFBhcmVudGhlc2l6ZWRUeXBlKHNvdXJjZTogU291cmNlLCBub2RlOiBTeW50YXhOb2RlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogbm9kZS50eXBlLFxuICAgIGNvbnRleHQ6IGNyZWF0ZU5vZGUoc291cmNlLCBub2RlKSxcbiAgICBwYXJlbnRoZXNpemVkOiB2aXNpdFR5cGVPclR5cGVJZGVudGlmaWVyKHNvdXJjZSwgbm9kZS5jaGlsZHJlblsxXSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmlzaXRHZW5lcmljVHlwZShzb3VyY2U6IFNvdXJjZSwgbm9kZTogU3ludGF4Tm9kZSkge1xuICBsZXQgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IG5vZGUudHlwZSxcbiAgICBjb250ZXh0OiBjcmVhdGVOb2RlKHNvdXJjZSwgbm9kZSksXG4gICAgZ2VuZXJpYzogdmlzaXRUeXBlSWRlbnRpZmllcihzb3VyY2UsIGNoaWxkcmVuLnNoaWZ0KCkpLFxuICAgIHR5cGVfYXJndW1lbnRzOiB2aXNpdFR5cGVBcmd1bWVudHMoc291cmNlLCBjaGlsZHJlbi5zaGlmdCgpKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdFByZWRlZmluZWRUeXBlKHNvdXJjZTogU291cmNlLCBub2RlOiBTeW50YXhOb2RlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogbm9kZS50eXBlLFxuICAgIGNvbnRleHQ6IGNyZWF0ZU5vZGUoc291cmNlLCBub2RlLmNoaWxkcmVuLnNoaWZ0KCkpLFxuICB9XG59Il19