describe("Unit test for Spider-man class", () => {
    test('1) Create an Spider-man object', () => {
      const andrewGarfield = new Spiderman("The Amazing Spiderman", 31, "Andrew Garfield", 2, "Columbia Pictures")

      expect(andrewGarfield.name).toBe("The Amazing Spiderman")
      expect(andrewGarfield.age).toBe(31)
      expect(andrewGarfield.actor).toBe("Andrew Garfield")
      expect(andrewGarfield.movies).toBe(2)
      expect(andrewGarfield.studio).toBe("Columbia Pictures")
    });
  })