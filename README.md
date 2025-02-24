# MongoDB Aggregation Pipeline Bug: Inaccurate Sum in $group
This repository demonstrates a common error in MongoDB aggregation pipelines: obtaining an inaccurate sum of values after joining collections using `$lookup`, `$unwind`, and `$group`.

## Bug Description
The provided JavaScript code shows an aggregation pipeline designed to sum values from a joined collection.  Due to an incorrect field reference in the `$group` stage, the sum is calculated incorrectly. 

## Solution
The solution demonstrates the correct way to reference fields after the `$unwind` stage, ensuring an accurate sum is calculated.  The corrected aggregation pipeline references the correct field within the `$sum` operator.

## How to Reproduce
1. Clone this repository.
2. Set up a MongoDB instance and create the necessary collections with sample data.
3. Run the script `bug.js` to observe the incorrect sum.
4. Run the script `bugSolution.js` to observe the correct sum.

This example highlights the importance of careful field referencing in MongoDB aggregation pipelines, particularly after performing `$unwind` operations.