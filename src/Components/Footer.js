export default function Footer() {
  return (
    <>
      <footer
        class="bg-gray-800 text-white"
        style={{
          height: "100%",
        }}
      >
        <div class="container mx-auto flex justify-between items-center">
          <div>
            <h4 class="text-lg font-bold">About Us</h4>
            <p class="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
          <div>
            <h4 class="text-lg font-bold">Contact Us</h4>
            <p class="mt-2">Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </footer>
    </>
  );
}
