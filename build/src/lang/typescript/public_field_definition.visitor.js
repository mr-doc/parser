"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const match_1 = require("../../utils/match");
const text_1 = require("../../utils/text");
const type_visitor_1 = require("./visitors/type.visitor");
const Node_1 = require("./Node");
function visitPublicFieldDefinition(source, node, comment) {
    let public_field_definition = node.children;
    let accessibility = 'public', identifier, type_annotation;
    if (match_1.default(public_field_definition[0], 'accessibility_modifier')) {
        accessibility = text_1.text(source, public_field_definition.shift());
    }
    if (match_1.default(public_field_definition[0], 'property_identifier')) {
        identifier = Node_1.createNode(source, public_field_definition.shift());
    }
    if (match_1.default(public_field_definition[0], 'type_annotation')) {
        let type = public_field_definition.shift().children[1];
        type_annotation = type_visitor_1.visitType(source, type);
    }
    return {
        type: 'property',
        context: Node_1.createNode(source, node),
        comment: Node_1.createNode(source, comment, null, true),
        identifier,
        accessibility,
        type_annotation
    };
}
exports.visitPublicFieldDefinition = visitPublicFieldDefinition;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2ZpZWxkX2RlZmluaXRpb24udmlzaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9sYW5nL3R5cGVzY3JpcHQvcHVibGljX2ZpZWxkX2RlZmluaXRpb24udmlzaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDZDQUFzQztBQUN0QywyQ0FBd0M7QUFDeEMsMERBQW9EO0FBQ3BELGlDQUFvQztBQUdwQyxTQUFnQiwwQkFBMEIsQ0FBQyxNQUFhLEVBQUUsSUFBZ0IsRUFBRSxPQUFtQjtJQUM3RixJQUFJLHVCQUF1QixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDNUMsSUFBSSxhQUFhLEdBQUcsUUFBUSxFQUMxQixVQUFVLEVBQ1YsZUFBZSxDQUFDO0lBRWxCLElBQUksZUFBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxFQUFFLHdCQUF3QixDQUFDLEVBQUU7UUFDL0QsYUFBYSxHQUFHLFdBQUksQ0FBQyxNQUFNLEVBQUUsdUJBQXVCLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztLQUMvRDtJQUVELElBQUksZUFBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxFQUFFLHFCQUFxQixDQUFDLEVBQUU7UUFDNUQsVUFBVSxHQUFHLGlCQUFVLENBQUMsTUFBTSxFQUFFLHVCQUF1QixDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDbEU7SUFFRCxJQUFJLGVBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFO1FBQ3hELElBQUksSUFBSSxHQUFHLHVCQUF1QixDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxlQUFlLEdBQUcsd0JBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDM0M7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLFVBQVU7UUFDaEIsT0FBTyxFQUFFLGlCQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztRQUNqQyxPQUFPLEVBQUUsaUJBQVUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7UUFDaEQsVUFBVTtRQUNWLGFBQWE7UUFDYixlQUFlO0tBQ2hCLENBQUE7QUFDSCxDQUFDO0FBMUJELGdFQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN5bnRheE5vZGUgfSBmcm9tIFwidHJlZS1zaXR0ZXJcIjtcclxuaW1wb3J0IG1hdGNoIGZyb20gXCIuLi8uLi91dGlscy9tYXRjaFwiO1xyXG5pbXBvcnQgeyB0ZXh0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3RleHRcIjtcclxuaW1wb3J0IHsgdmlzaXRUeXBlIH0gZnJvbSBcIi4vdmlzaXRvcnMvdHlwZS52aXNpdG9yXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi9Ob2RlXCI7XHJcbmltcG9ydCBJRmlsZSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JRmlsZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZpc2l0UHVibGljRmllbGREZWZpbml0aW9uKHNvdXJjZTogSUZpbGUsIG5vZGU6IFN5bnRheE5vZGUsIGNvbW1lbnQ6IFN5bnRheE5vZGUpIHtcclxuICBsZXQgcHVibGljX2ZpZWxkX2RlZmluaXRpb24gPSBub2RlLmNoaWxkcmVuO1xyXG4gIGxldCBhY2Nlc3NpYmlsaXR5ID0gJ3B1YmxpYycsXHJcbiAgICBpZGVudGlmaWVyLFxyXG4gICAgdHlwZV9hbm5vdGF0aW9uO1xyXG5cclxuICBpZiAobWF0Y2gocHVibGljX2ZpZWxkX2RlZmluaXRpb25bMF0sICdhY2Nlc3NpYmlsaXR5X21vZGlmaWVyJykpIHtcclxuICAgIGFjY2Vzc2liaWxpdHkgPSB0ZXh0KHNvdXJjZSwgcHVibGljX2ZpZWxkX2RlZmluaXRpb24uc2hpZnQoKSk7XHJcbiAgfVxyXG5cclxuICBpZiAobWF0Y2gocHVibGljX2ZpZWxkX2RlZmluaXRpb25bMF0sICdwcm9wZXJ0eV9pZGVudGlmaWVyJykpIHtcclxuICAgIGlkZW50aWZpZXIgPSBjcmVhdGVOb2RlKHNvdXJjZSwgcHVibGljX2ZpZWxkX2RlZmluaXRpb24uc2hpZnQoKSk7XHJcbiAgfVxyXG5cclxuICBpZiAobWF0Y2gocHVibGljX2ZpZWxkX2RlZmluaXRpb25bMF0sICd0eXBlX2Fubm90YXRpb24nKSkge1xyXG4gICAgbGV0IHR5cGUgPSBwdWJsaWNfZmllbGRfZGVmaW5pdGlvbi5zaGlmdCgpLmNoaWxkcmVuWzFdO1xyXG4gICAgdHlwZV9hbm5vdGF0aW9uID0gdmlzaXRUeXBlKHNvdXJjZSwgdHlwZSk7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiAncHJvcGVydHknLFxyXG4gICAgY29udGV4dDogY3JlYXRlTm9kZShzb3VyY2UsIG5vZGUpLFxyXG4gICAgY29tbWVudDogY3JlYXRlTm9kZShzb3VyY2UsIGNvbW1lbnQsIG51bGwsIHRydWUpLFxyXG4gICAgaWRlbnRpZmllcixcclxuICAgIGFjY2Vzc2liaWxpdHksXHJcbiAgICB0eXBlX2Fubm90YXRpb25cclxuICB9XHJcbn0iXX0=