# JBRainsTDD_SeriesTwo

## Notes

 **Triangulation:** Adding special case tests with new inputs in order to justify generalizing
 the algorithm one step at a time, instead of jumping to what we believe to be "the general case".

 **Moving Duplicate Details From the Production Code into the Tests:** If you see hardcoded data
 duplicated between the production code and the tests, change the production code to accept that data
 as parameters.

 **Test List - ** product found, product not found, empty barcode, null barcode | duplicate test setup, introduce lookup table

**Speaker Comments**

 "Up The Call Stack". I visualize the call stack with the client above the server, so "up" means "toward the entry point."

 "Trusted Zone". I call this the **Bouncer** pattern: have one big, strong person at the front door keeping bad data out, and
  continually expand the "trusted zone" inside your code, where the occasional mistake appears as an unexpected exception.

  "Four Elements of Simple Design" :

  1. Pass the tests.
  2. Reduce duplication.
  3. Improve clarity.
  4. Consolidate design elements.

  "Three steps for changing an algorithm" :

  1. Add the new code.
  2. Migrate the clients.
  3. Remove the old code.   


  To remove an "if" statement, make every branch do the same thing, so that branching is no longer needed.
  Naming a lookup table: Values By Key.