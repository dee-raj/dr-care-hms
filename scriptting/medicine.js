const top10medicines = [
   {
      id: 1,
      title: 'Penicillin: First on All Lists',
      info: "Penicillin is the first antibiotic discovered by Alexander Fleming in 1928. It revolutionized medicine by effectively treating bacterial infections that were previously life-threatening. Penicillin and its derivatives remain essential in modern medicine for treating a wide range of bacterial infections.",
      imgUrl: '../images/medicines/penicillin-1.jpg'
   },

   {
      id: 2,
      title: 'Insulin: The First Hormone Therapy',
      info: "Insulin is a hormone that regulates blood sugar levels. Its discovery in 1921 by Frederick Banting and Charles Best transformed the treatment of diabetes, particularly type 1 diabetes. Before insulin, diabetes was often fatal. Insulin therapy allows individuals with diabetes to manage their condition and live healthier lives.",
      imgUrl: '../images/medicines/insulin-2.webp'
   },
   {
      id: 3,
      title: 'Smallpox Vaccine, Polio Vaccine',
      info: "Smallpox Vaccine: Developed by Edward Jenner in the late 18th century, Polio Vaccine: Developed by Jonas Salk(inactivated polio vaccine) and Albert Sabin(oral polio vaccine) in the mid- 20th century, polio vaccines have played a crucial role in nearly eradicating polio globally.They prevent poliomyelitis, a viral disease that can cause paralysis and death.",
      imgUrl: '../images/medicines/polio-3.webp'
   },
   {
      id: 4,
      title: 'Ether: The Making of Modern Surgery',
      info: "Ether is a volatile liquid once commonly used as an anesthetic in surgery. Its first successful public demonstration for surgery was in 1846 by William T.G. Morton. Ether anesthesia revolutionized surgery by allowing patients to undergo operations without feeling pain, leading to safer and more complex surgical procedures.",
      imgUrl: '../images/medicines/Ether-4.webp'
   },
   {
      id: 5,
      title: 'Morphine: Banning the Bane of Pain',
      info: "Morphine is a powerful opioid pain medication derived from the opium poppy plant. It was isolated in 1804 by Friedrich Sertürner. Morphine is highly effective for severe pain relief but also has significant potential for addiction and abuse, leading to strict regulation and controlled medical use.",
      imgUrl: '../images/medicines/Morphine-5.png'
   },
   {
      id: 6,
      title: 'Aspirin: More Than a Headache Pill',
      info: "Aspirin (acetylsalicylic acid) is a versatile medication known for its pain-relieving, anti-inflammatory, and antiplatelet (blood-thinning) properties. It was originally derived from willow bark and developed into its modern form in the late 19th century by Bayer. Aspirin is used to treat pain, fever, inflammation, and prevent heart attacks and strokes.",
      imgUrl: '../images/medicines/aspirin-6.avif'
   },
   {
      id: 7,
      title: 'Salvarsan -- The Cure for Lust',
      info: "Salvarsan, discovered by Paul Ehrlich in 1909, was the first effective treatment for syphilis, a sexually transmitted infection caused by the bacterium Treponema pallidum. It was a significant breakthrough in the treatment of infectious diseases and paved the way for later antibiotics.",
      imgUrl: '../images/medicines/Salvarsan-7.jpg'
   },
   {
      id: 8,
      title: ' Psychiatric Medications -- Calming the Troubled Mind',
      info: "Psychiatric medications encompass a range of drugs used to treat mental health disorders such as depression, anxiety, bipolar disorder, schizophrenia, and others. Examples include antidepressants, antipsychotics, mood stabilizers, and anxiolytics. These medications help manage symptoms and improve the quality of life for individuals with psychiatric conditions.",
      imgUrl: '../images/medicines/Psychiatric Medications-8.jpg'
   },
   {
      id: 9,
      title: 'Birth Control Pills',
      info: "Birth control pills (oral contraceptives) are hormonal medications taken daily to prevent pregnancy. They were first approved for contraceptive use in the 1960s and have since become one of the most popular and effective forms of birth control worldwide. Birth control pills work by preventing ovulation and altering the uterine lining to inhibit fertilization.",
      imgUrl: '../images/medicines/birth-control-pills-9.webp'
   },
   {
      id: 10,
      title: 'Help for the Heart',
      info: "Beta-blockers: Reduce blood pressure and heart rate, used for hypertension and heart conditions. ACE inhibitors: Lower blood pressure and help manage heart failure. Antiplatelet drugs: Reduce the risk of blood clot formation, used in heart disease prevention. Diuretics: Help reduce fluid buildup in the body, used for heart failure and hypertension management. Statins: Lower cholesterol levels to reduce the risk of heart disease.",
      imgUrl: '../images/medicines/GettyImages-10.jpg'
   },
]


function updateDrugInfo(id) {
   const medicine = top10medicines.find(med => med.id === id);

   if (medicine) {
      document.getElementById('title').textContent = medicine.title;
      document.getElementById('info').textContent = medicine.info;
      document.getElementById('info-img').src = medicine.imgUrl;
      document.getElementById('info-img').alt = `Image of ${medicine.info}`;
   } else {
      console.error(`Medicine with ID ${id} not found.`);
   }
}

document.querySelectorAll('#medicine-list span').forEach(item => {
   item.addEventListener('click', function () {
      const id = parseInt(this.id);
      updateDrugInfo(id);
   });
});