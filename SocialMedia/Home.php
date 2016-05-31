<?php
session_start();
include_once 'Dbconnect.php';

if(!isset($_SESSION['user']))
{
	header("Location: Login.php");
}
$res=mysql_query("SELECT * FROM users WHERE user_id=".$_SESSION['user']);
$userRow=mysql_fetch_array($res);
?>
<!DOCTYPE html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Welcome - <?php echo $userRow['email']; ?></title>
	<link rel="stylesheet" href="main.css" type="text/css" />
	<script type="text/javascript" src="http://vucumagic.com/jquery-2.2.2.min.js"></script>
	<script type="text/javascript" src="script.js"></script>	
</head>
<body>
	<div id="header">
		<div id="left">
			<label>Social Media</label>
		</div>
		<div id="right">
			 <div id="content">
				Welcome, <?php echo $userRow['username']; ?>&nbsp;<a href="Logout.php?logout">Sign Out</a>
			</div>
		</div>
	</div>
	
	<div class="header">
      <div class="container">
        <h1>Your Posts</h1>
      </div>
    </div>

    <div class="main">
      <div class="container">
        
        <form class="form">
          <input id="comment" type="text" placeholder="share your thoughts" name="post-content">
          <button type="submit" class="btn" name="btn-post" value="btn-post">post</button>
        </form>

        <ul class="comments">
		<?php
			$user2=$_SESSION['user'];
			$result2=mysql_query("SELECT * FROM posts WHERE user_id='$user2' ORDER BY post_id DESC LIMIT 10");
			if ($result2)
			{
				while ($row=mysql_fetch_array($result2)) 	
				{
					$content2 = $row['content'];
					echo "<li>".$content2."</li>";
				}
			}
		?>
        </ul>
      </div>
    </div>
</body>