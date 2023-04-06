<?php
if (empty($_SESSION['id'] AND getCompanyID($_SESSION['id']))) {
    header('location: http://localhost/sites/batch19-project/index.php');
exit;
}
$title = "company dashboard";
ob_start();
?>

<!-- main -->
<div class="bizProfile">
    <div class="main">
        <h3>Job Listings</h3><br>
        <div class="jobListingWrapper">
            <?php
            // print_r($listings);
            if (!empty($listings) && empty($jobId)) {
                foreach ($listings as $listing) {
                    require "./view/components/jobPostingCard.php";
                }
            } else if (!empty($jobId)) {
                require "./view/components/jobCard.php";
            } ?>
        </div>
        <?php

        if (!empty($jobId)) {
        ?>
            <div class="JobPostingActions">
                <button id="jobPostingEditBtn" class="button">Edit</button>
                <button id="jobPostingFinishBtn" class="button">Finish</button>
                <button id="jobPostingBackBtn" class="button">Back</button>
            </div>

        <?php
        } else { ?>
            <a href="./index.php?action=createJobForm" id="addaJobBtn">
                <button class="button">ADD A JOB</button>
            </a><?php
            } ?>
    </div>
</div>
<script defer src="./public\javascript\jobListing.js"></script>
<?php
$content = ob_get_clean();
require('./view/companyDashboardTemplate.php');
?>