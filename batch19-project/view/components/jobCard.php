<div class="jobPostingCardFull">
    <div class="jobPostingCardHead">
        <div class="jobPostingCardCompanyLogo">
            <img src="<?= htmlspecialchars($jobCard->logo_img) ?>" alt="">
            <div class="jobPostingCardActions">
                <a class="" href="./index.php?action=talentSearch&jobId=<?= $jobCard->jobId ?>">
                    <button id="addCandidatesBtn">Candidate search</button>
                </a>
                <button id="closePositionBtn">Close position</button>
            </div>
        </div>
    </div>
    <div class="jobPostingInfo">
        <h1 class="jobPostingTitle"><?= htmlspecialchars($jobCard->title) ?></h1>
        <p><?= htmlspecialchars($jobCard->city_name) . ", " . htmlspecialchars($jobCard->country_code) ?></p>
        <h2>About the job</h2>
        <p class="editableContext"><?= htmlspecialchars($jobCard->job_description) ?></p>
        <p>Salary range: <span class="editableContext"><?= htmlspecialchars($jobCard->salary_min) ?></span> <span>₩</span><span> - </span> <span class="editableContext"><?= $jobCard->salary_max ?></span> <span>₩</span></p><span>Application deadline: </span>
        <span class="editableContext" id="datetimepicker"><?= date_format(date_create($jobCard->deadline), "Y-m-d") ?></span><span>,</span>
        <span><?= "Date of posting: " . date_format(date_create($jobCard->date_created), "Y-m-d") ?></span>
        <div class="aboutTheCompany">
            <h2>About the company</h2>
            <p><?= htmlspecialchars($jobCard->name) ?></p>
            <p><?= htmlspecialchars($jobCard->website_address) ?></p>
        </div>
    </div>
    <input type="hidden" name="jobState" id="<?= $jobCard->jobId ?>" data="<?= $jobCard->is_active ?>">
</div>
<script defer src="public\javascript\editJobPosting.js"></script>