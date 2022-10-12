
import Foundation
import Glibc

// you can write to stdout for debugging purposes, e.g.
// print("this is a debug message")

public func solution(_ A : inout [String], _ B : inout [String], _ P : inout String) -> String {
    // write your code in Swift 4.2.1 (Linux)
  let finalDict = Dictionary(zip(A, B)) { $0 + $1 }

  let getMatchedKeys = finalDict.filter({ $0.value.contains(P)}).keys
  if(getMatchedKeys.isEmpty) {
    return "NO CONTACT"
  }
 return getMatchedKeys.sorted().first!

}