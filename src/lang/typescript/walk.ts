import { SyntaxNode } from "tree-sitter";
import { Node } from "./visitors/visitor";

export function walk(node: SyntaxNode) {
  let node_ = new Node(node);
  node_.syntaxNode.children.map(child => walk(child))
  return node_;
}