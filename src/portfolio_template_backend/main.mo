import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
import Array "mo:base/Array";  // Make sure Array is imported

actor WebsiteBackend {

  // Stable state: Tracks the total number of visits
  stable var visitCount: Nat = 0;

  // Function: Increment the visit count and return the updated count
  public func recordVisit() : async Nat {
    visitCount += 1; // Increment the visit count
    return visitCount;
  };

  // Query: Retrieve the current visit count
  public query func getVisitCount() : async Nat {
    return visitCount;
  };

  // Query: Greet a visitor (optional function)
  public query func greet() : async Text {
    let message = "Welcome to our website! Total visits so far: " # Nat.toText(visitCount);
    Debug.print("Greet called. Message: " # message);
    return message;
  };

  // Stable state: List to hold comments
  stable var comments : [Text] = [];

  // Function: Add a comment
  public func addComment(comment: Text) : async Text {
    comments := Array.append<Text>(comments, [comment]);  // Add the comment to the list
    return "Comment added successfully!";
  };

  // Query: Get all comments
  public query func getComments() : async [Text] {
    return comments;
  };

};
