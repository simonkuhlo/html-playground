<?php
// PHP script to get image paths from a directory
$imgdir = "current/";
$fileendings = array("jpg", "jpeg", "png", "gif"); // Adjust the path and file type as needed
$images = array();
foreach ($fileendings as $fileending) {
    $images = array_merge($images, glob($imgdir."*.".$fileending));
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Slideshow</title>
    <style>
        /* Add your CSS styles for the slideshow here */
        .slideshow-container {
            position: relative;
            width: 100%;
            max-width: 600px; /* Adjust as needed */
            margin: auto;
        }
        .slide {
            display: none;
        }
        /* Add styles for navigation buttons and active slide indicators */
    </style>
</head>
<body>

<div class="slideshow-container">
    <?php foreach ($images as $index => $image): ?>
        <div class="slide">
            <img src="<?php echo $image; ?>" style="width:100%">
            <!-- Optional: Add caption or other content here -->
        </div>
    <?php endforeach; ?>
    <!-- Add navigation buttons here -->
</div>

<script>
    // JavaScript to handle the slideshow functionality
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("slide");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {window.location.reload(true);}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
</script>

</body>
</html>