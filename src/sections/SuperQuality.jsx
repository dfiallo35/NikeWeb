import Button from "../components/Button"
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="quality"
      className="flex justify-between items-center w-full max-container gap-10 max-lg:flex-col"
    >
      <div className="flex flex-col flex-1">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red "> Super </span> 
          <span className="text-coral-red ">Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button
            label="View Details"
          />
        </div>
        
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality