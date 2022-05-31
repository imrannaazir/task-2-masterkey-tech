import React from "react";

const OurCEO = () => {
  return (
    <div class="hero  bg-base-200">
      <div class="hero-content grid grid-cols-2 gap-8">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20EptmkYefff6POHQ6LIKdGvwcx8VBYFb9A&usqp=CAU"
          className="rounded-md w-[90%]"
        />
        <div>
          <h1 class="text-5xl font-bold">Our CEO!</h1>
          <p className="text-lg text-primary">John Abraham</p>
          <p class="py-6">
            {`"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
          expedita dolorem dignissimos harum soluta aliquid voluptate ipsa, a
          temporibus, placeat assumenda voluptates alias accusamus et
          repellendus molestiae natus obcaecati cum error. Eos veniam beatae
          quia, soluta sed sunt, nihil, consequuntur earum tempore atque
          repudiandae ullam maxime corrupti unde. Commodi eius numquam iusto
          eos nam voluptatum dolorum! Quidem, officia tempore! Facilis quis
          assumenda ab ipsam quos odit earum incidunt dicta. Nulla distinctio
          commodi dolorem, ab quaerat eveniet at iste aspernatur placeat
          temporibus odit aperiam voluptas laudantium perferendis enim
          perspiciatis hic dolore quod, doloremque amet odio facere vitae
          laborum maiores. Dolor, incidunt!"`}
          </p>
          <button class="btn btn-primary">Follow Him</button>
        </div>
      </div>
    </div>
  );
};

export default OurCEO;
