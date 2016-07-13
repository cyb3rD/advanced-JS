## Basic binding rules:

1. Was the function called with 'new'?
    Yes - use that object

    2. Was the function called with 'call' or 'apply specifying an explicti this?
      Yes - use that object

      3. Was the function called via a containig/owning object (context)?
        Yes - use that object

        4. DEFAULT: global object (expect strict mode)

