export type Suits = "White" | "Red" | "Blue" | "Black"
export type Marks = |
  "Square" |
  "Diamond" |
  "Triangle" |
  "Semicircle" |
  "Circle"
export type Attributes = "Good" | "Neutral" | "Bad"

export type Card = {
  id: string
  suit: Suits
  mark: Marks
  attribute: Attributes
}
