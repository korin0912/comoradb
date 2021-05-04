<?php

$chanks = GetChanks();

echo "record: ".count($chanks)."\n";

file_put_contents("Games.json", json_encode(GetGamesJson($chanks), JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES));
file_put_contents("Movies.json", json_encode(GetMoviesJson($chanks), JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES));

/**
 * 
 */
function GetChanks()
{
	$ret = [];

	$infile = fopen("list2.html", "r");
	$gameCount = 0;
	while (true)
	{
		$chank = GetChank($infile);
		if ($chank == null)
		{
			break;
		}
		$chank = ParseHtml($chank, $gameCount);
		if ($chank != null)
		{
			$ret[] = $chank;
		}
	}
	fclose($infile);

	return $ret;
}

/**
 * 
 */
function GetChank($infile)
{
	$ret = [];
	for ($i=0; $i<11; $i++)
	{
		$line = fgets($infile);
		if ($line == null)
		{
			return null;
		}
		$ret[] = $line;
	}
	return $ret;
}

/**
 * 
 */
function ParseHtml($chank, &$gameCount)
{
	$ret = [
		"gameIndex" => null,
		"gameName" => null,
		"gameUrls" => [],
		"gameGenres" => [],

		"movieIndex" => null,
		"movieReleaseDate" => null,
		"movieName" => null,
		"movieUrl" => null,
		"movieActors" => [],
		"movieChat" => null,
	];

	//  0: <td class="s16" dir="ltr"><a target="_blank" href="https://deadbydaylight.com/en">Dead by Daylight</a></td>
	preg_match('/href=".*"/', $chank[0], $matches);
	if (count($matches) > 0)
	{
		$ret["gameUrls"][] = substr($matches[0], 6, strlen($matches[0]) - 7);
	}

	$tmp = trim(str_replace(["</a>", "</td>"], "", $chank[0]));
	$ret["gameName"] = decode_html_escape(substr($tmp, strrpos($tmp, ">")+1));

	//  1: <td class="s17" dir="ltr">対称型対戦サバイバルホラー</td>
	if (preg_match('/>.+</', $chank[1], $matches))
	{
		$tmp = substr($matches[0], 1, strlen($matches[0])-2);
		$tmp = explode("、", $tmp);
		foreach ($tmp as $t)
		{
			$ret["gameGenres"] = array_merge($ret["gameGenres"], GetGenreIds($t));
		}
	}

	//  2: <td class="s18 softmerge" dir="ltr"><div class="softmerge-inner" style="width:121px;left:-1px"><a target="_blank" href="https://store.steampowered.com/app/381210/Dead_by_Daylight/">https://store.steampowered.com/app/381210/Dead_by_Daylight/</a></div></td>
	preg_match('/href=".*"/', $chank[2], $matches);
	if (count($matches) > 0)
	{
		$ret["gameUrls"][] = substr($matches[0], 6, strlen($matches[0]) - 7);
	}

	//  3: <td class="s19" dir="ltr">1</td>
	if (preg_match('/>\d+</', $chank[3], $matches))
	{
		$ret["movieIndex"] = intval(substr($matches[0], 1, strlen($matches[0])-2));
	}

	//  4: <td class="s20" dir="ltr">2018/08/17</td>
	if (preg_match('/>\d{4}\/\d{1,2}\/\d{2}</', $chank[4], $matches))
	{
		$ret["movieReleaseDate"] = substr($matches[0], 1, strlen($matches[0])-2);
	}

	//  5: <td class="s21" dir="ltr"><a target="_blank" href="https://www.youtube.com/watch?v=9EIq6Fzw8FU">【怖い】デッドバイデイライト ～お前のレバーは俺が引く！～ #1</a></td>
	preg_match('/href=".*"/', $chank[5], $matches);
	if (count($matches) > 0)
	{
		$ret["movieUrl"] = substr($matches[0], 6, strlen($matches[0]) - 7);
	}

	$tmp = trim(str_replace(["</a>", "</div>", "</td>"], "", $chank[5]));
	$ret["movieName"] = decode_html_escape(substr($tmp, strrpos($tmp, ">")+1));

	//  6: <td class="s19" dir="ltr"><svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:inline;"><use xlink:href="#uncheckedCheckboxId" fill="#000000"/></svg></td>
	if (strpos($chank[6], "uncheckedCheckboxId") === false)
	{
		$ret["movieActors"][] = 1;
	}

	//  7: <td class="s19" dir="ltr"><svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:inline;"><use xlink:href="#checkedCheckboxId" fill="#000000"/></svg></td>
	if (strpos($chank[7], "uncheckedCheckboxId") === false)
	{
		$ret["movieActors"][] = 2;
	}

	//  8: <td class="s22" dir="ltr">ピーナッツくん</td>
	if (preg_match('/>.+</', $chank[8], $matches))
	{
		$tmp = substr($matches[0], 1, strlen($matches[0])-2);
		if (preg_match('/>.+</', $tmp, $matches))
		{
			$tmp = substr($matches[0], 1, strlen($matches[0])-2);
		}
		$tmp = explode("、", $tmp);
		foreach ($tmp as $t)
		{
			$t = GetActorId($t);
			if (!empty($t))
			{
				$ret["movieActors"][] = $t;
			}
		}
	}

	//  9: <td class="s23" dir="ltr"><svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:inline;"><use xlink:href="#uncheckedCheckboxId" fill="#000000"/></svg></td>
	$ret["movieChat"] = (strpos($chank[9], "uncheckedCheckboxId") === false);

	// 10: <td class="s24" dir="ltr"></td></tr>

	if (empty($ret["gameName"]) && empty($ret["movieName"]))
	{
		// echo sprintf("%s, %s, (%s), (%s), %s, %s, %s, %s, (%s), %s\n",
		// 	$ret["gameIndex"],
		// 	$ret["gameName"],
		// 	implode(", ", $ret["gameUrls"]),
		// 	implode(", ", $ret["gameGenres"]),
		// 	$ret["movieIndex"],
		// 	$ret["movieReleaseDate"],
		// 	$ret["movieName"],
		// 	$ret["movieUrl"],
		// 	implode(", ", $ret["movieActors"]),
		// 	$ret["movieChat"]
		// );
		return null;
	}

	if (!empty($ret["gameName"]))
	{
		$gameCount ++;
		$ret["gameIndex"] = $gameCount;
	}

	echo sprintf("%s, %s, (%s), (%s), %s, %s, %s, %s, (%s), %s\n",
		$ret["gameIndex"],
		$ret["gameName"],
		implode(", ", $ret["gameUrls"]),
		implode(", ", $ret["gameGenres"]),
		$ret["movieIndex"],
		$ret["movieReleaseDate"],
		$ret["movieName"],
		$ret["movieUrl"],
		implode(", ", $ret["movieActors"]),
		$ret["movieChat"]
	);

	return $ret;
}

function GetGenreIds($name)
{
	if (empty($name))
	{
		return [];
	}

	$ret = [];

	$tbl = [
		"ACT" => 1,
		"ADV" => 2,
		"FPS" => 8,
		"RCG" => 10,
		"STG" => 4,
		"TPS" => 7,
		"VR" => 105,
		"アクション" => 1,
		"アドベンチャー" => 2,
		"アニメーション" => 124,
		"オンライン" => 101,
		"オープンワールド" => 108,
		"カード" => 106,
		"サバイバル" => 104,
		"サンドボックス" => 111,
		"シミュレーション" => 5,
		"シューター" => 126,
		"シューティング" => 4,
		"ステルス" => 115,
		"ストラテジー" => 107,
		"スネーク" => 115,
		"スポーツ" => 6,
		"タイミング" => 130,
		"タワーディフェンス" => 109,
		"テーブル" => 112,
		"バカゲー" => 113,
		"バトルアリーナ" => 129,
		"バトルロイヤル" => 128,
		"パズル" => 9,
		"プラットフォーム" => 110,
		"ベルトスクロール" => 114,
		"ホラー" => 100,
		"マルチプレイ" => 101,
		"レース" => 10,
		"ローグライク" => 102,
		"人狼" => 123,
		"体験？" => 113,
		"協力" => 116,
		"垂直スクロール" => 119,
		"多人数" => 127,
		"対戦" => 117,
		"格闘" => 11,
		"横スクロー" => 118,
		"死にゲー" => 103,
		"無双系" => 120,
		"育成" => 121,
		"音ゲー" => 122,
	];

	foreach ($tbl as $key => $value)
	{
		if (strpos($name, $key) !== false)
		{
			$ret[] = $value;
		}
	}

	if (strpos($name, "ARPG") !== false)
	{
		$ret[] = 3;
		$ret[] = 1;
	}
	else if (strpos($name, "SRPG") !== false)
	{
		$ret[] = 3;
		$ret[] = 5;
	}
	else if (strpos($name, "RPG") !== false)
	{
		$ret[] = 3;
	}

	if (strpos($name, "リアルタイム") !== false)
	{
	}
	else if (strpos($name, "リアル") !== false)
	{
		$ret[] = 125;
	}

	sort($ret);

	return $ret;
}

function GetActorId($name)
{
	if (empty($name))
	{
		return null;
	}

	if ($name == "コモラ")
	{
		return 1;
	}
	if ($name == "チャンチョ")
	{
		return 2;
	}
	if ($name == "ピーナッツくん")
	{
		return 3;
	}
	if (strpos($name, "うさうさらびっと") !== false)
	{
		return 4;
	}
	if ($name == "コモラちゃん")
	{
		return 5;
	}
	if ($name == "大蛇丸")
	{
		return 6;
	}

	return null;
}

function GetGamesJson($chanks)
{
	$ret = [];

	foreach ($chanks as $key => $chank)
	{
		if (empty($chank["gameName"]))
		{
			continue;
		}

		$ret[$chank["gameIndex"]] = [
			"name" => $chank["gameName"],
			"urls" => $chank["gameUrls"],
			"genreIds" => $chank["gameGenres"],
			"comment" => "",
		];
	}

	$ret[9999] = [
		"name" => "TERM",
		"urls" => [],
		"genreIds" => [],
		"comment" => "",
	];

	return $ret;
}

function GetMoviesJson($chanks)
{
	$ret = [];

	$gameIndex = 0;
	$movieIndex = 0;
	$movie = [];
	foreach ($chanks as $key => $chank)
	{
		if (!empty($chank["gameName"]))
		{
			$gameIndex = $chank["gameIndex"];
		}

		if (!empty($chank["movieName"]))
		{
			if ($movieIndex != $chank["movieIndex"] && $movieIndex != 0)
			{
				$ret[$movieIndex] = $movie;
				$movie = [];
			}

			$movieIndex = $chank["movieIndex"];

			$movie = [
				"name" => $chank["movieName"],
				"url" => $chank["movieUrl"],
				"releaseDate" => $chank["movieReleaseDate"],
				"gameIds" => [],
				"actorIds" => $chank["movieActors"],
				"chat" => $chank["movieChat"],
				"comment" => "",
			];
		}

		$movie["gameIds"][] = $gameIndex;
	}

	if (!empty($movie))
	{
		$ret[$movieIndex] = $movie;
	}

	return $ret;
}

function decode_html_escape($str)
{
	return html_entity_decode($str, ENT_QUOTES);
	// $str = str_replace("&#39;", "'", $str);
	// $str = str_replace("&quot;", "\"", $str);
	// $str = str_replace("&amp;", "&", $str);
	// return $str;
}
